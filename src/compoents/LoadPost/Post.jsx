import { Fragment, useEffect, useState } from "react";
import styles from "./Post.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";

const Post = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:9090/api/v1/posts");
        if (!response.ok) {
          throw new Error("Failed to load posts from server");
        }
        const data = await response.json();
        setLoadedPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Fragment>
      <section className={styles.container}>
        {loadedPosts.map((post) => {
          return (
            <Card key={post.id} className={styles.card}>
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
                  className={styles.card__typography}
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
                      className={styles.card__image}
                    />
                  )}
              </CardContent>
              <CardActions disableSpacing className={styles.cardActions}>
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
          );
        })}
      </section>
    </Fragment>
  );
};

export default Post;
