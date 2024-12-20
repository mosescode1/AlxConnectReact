import { Fragment, useContext, useEffect, useState, useRef } from "react";
import { Avatar } from "@mui/material";
import UserContext from "../../store/userContext";
import classes from "./ProfileMain.module.css";
import { Card, CardHeader, CardContent, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

function ProfileMain() {
  const [posts, setPosts] = useState([]);
  const userctx = useContext(UserContext);
  const { currentlyLoggedInUser, setCurrentlyLoggedInUser } = userctx;

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (currentlyLoggedInUser) {
        try {
          const response = await fetch(
            `http://localhost:9090/api/v1/users/${currentlyLoggedInUser.id}/posts`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch posts");
          }
          const data = await response.json();
          setPosts(data.posts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    };

    fetchUserPosts();
  }, [currentlyLoggedInUser]);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile_picture", file);

      try {
        const response = await fetch(
          `http://localhost:9090/api/v1/users/${currentlyLoggedInUser.id}`,
          {
            method: "PATCH",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const newProfilePictureUrl = data.user.profile_picture;
          setCurrentlyLoggedInUser((prevUser) => ({
            ...prevUser,
            profile_picture: newProfilePictureUrl,
          }));
        } else {
          console.error("Failed to upload profile picture");
        }
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };

  const profilePictureUrl = currentlyLoggedInUser?.profile_picture
    ? currentlyLoggedInUser.profile_picture.startsWith("data:")
      ? currentlyLoggedInUser.profile_picture
      : `http://localhost:9090/${currentlyLoggedInUser.profile_picture}`
    : "";

  return (
    <Fragment>
      <main className={classes.mainPage}>
        <div className={classes.main}>
          <div className={classes.avatar}>
            <Avatar
              className={classes.scale}
              onClick={handleAvatarClick}
              src={`http://localhost:9090/${profilePictureUrl}`}
              style={{ cursor: "pointer" }}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>

        <div className={classes.userName}>
          {currentlyLoggedInUser ? (
            <>
              <h2>@{currentlyLoggedInUser.username}</h2>
              <hr />
            </>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>

        <div className={classes.allPosts}>
          <h2>All Posts</h2>
        </div>

        {posts.length > 0 ? (
          <section className={classes.container}>
            {posts.map((post) => (
              <Card key={post.id} className={classes.card}>
                <CardHeader
                  avatar={
                    post.user?.profile_picture?.image_base64 &&
                    post.user?.profile_picture?.mime_type ? (
                      <Avatar
                        src={`data:${post.user.profile_picture.mime_type};base64,${post.user.profile_picture.image_base64}`}
                        aria-label="user profile picture"
                      />
                    ) : (
                      <Avatar
                        sx={{ bgcolor: red[500] }}
                        aria-label="username initials"
                      >
                        {post.user?.username
                          ? post.user.username[0].toUpperCase()
                          : "?"}
                      </Avatar>
                    )
                  }
                  title={post.user?.username || "Unknown user"}
                  subheader={`Posted on ${new Date(
                    post.created_at
                  ).toLocaleDateString()} ${new Date(
                    post.created_at
                  ).toLocaleTimeString()}`}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    className={classes.card__typography}
                  >
                    {post.content}
                  </Typography>

                  {post.image &&
                    post.image.image_base64 &&
                    post.image.mime_type && (
                      <img
                        src={`data:${post.image.mime_type};base64,${post.image.image_base64}`}
                        alt="Post Image"
                        className={classes.card__image}
                      />
                    )}
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                  <div>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                  <div>
                    <IconButton aria-label="chat/replies">
                      <ChatIcon />
                    </IconButton>
                  </div>
                  <div>
                    <IconButton aria-label="retweet">
                      <RepeatIcon />
                    </IconButton>
                  </div>
                </CardActions>
              </Card>
            ))}
          </section>
        ) : (
          <LoadingSpinner />
        )}
      </main>
    </Fragment>
  );
}

export default ProfileMain;
