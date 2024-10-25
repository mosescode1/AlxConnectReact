import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../Profile/ProfileHeader";
import Footer from "../../Footer/Footer";
import { Card, CardHeader, CardContent, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar } from "@mui/material";
import classes from "../Profile/ProfileMain.module.css";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const UserProfile = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `http://localhost:9090/api/v1/users/${userId}`
        );
        const userData = await userResponse.json();
        setUser(userData);

        const postResponse = await fetch(
          `http://localhost:9090/api/v1/users/${userId}/posts`
        );
        const postData = await postResponse.json();
        setPosts(postData.posts);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [userId]);

  if (!posts) return <LoadingSpinner />;

  return (
    <Fragment>
      <ProfileHeader />
      <main className={classes.mainPage}>
        <div className={classes.main}>
          <div className={classes.avatar}>
            <Avatar
              className={classes.scale}
              //   onClick={handleAvatarClick}
              src={`http://localhost:9090/${posts.profile_picture}`} // Prepend the server URL
              style={{ cursor: "pointer" }}
            />
            {/* Hidden file input for selecting the image */}
            <input
              type="file"
              style={{ display: "none" }} // Hide the input
              accept="image/*"
            />
          </div>
        </div>
        <div className={classes.userName}>
          <h2>@{user.username || "Unknown user"}</h2>
          <hr />
        </div>

        {/* ALL POSTS */}
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

                  {/* Display the post image if it exists */}
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
      <Footer />
    </Fragment>
  );
};

export default UserProfile;
