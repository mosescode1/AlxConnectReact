import { Fragment, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./addPost.module.css";

const AddPost = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("content", name);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        `http://localhost:9090/api/v1/users/${id}/posts`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        console.log("Post created successfully!"); // update UI accordingly...
        setName("");
        setImage(null);
        setImagePreview(null);
      } else {
        console.error("Error creating post."); //update UI accordingly
      }
    } catch (error) {
      console.error("Error:", error); //  update UI accordingly
    }
  };

  return (
    <Fragment>
      <Header />
      <div className={styles.header}>
        <ArrowBackIcon className={styles.icon} />
        <h2 className={styles.text}>Share a post</h2>
      </div>

      <Box className={styles.formBox}>
        <div className={styles.userDetails}>
          <Avatar className={styles.avatar}>P</Avatar>
          <h2 className={styles.username}>Effa Triad</h2>
        </div>

        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          id="post"
          label="New Post"
          variant="outlined"
          multiline
          rows={4}
          sx={{ mt: 2 }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.fileInput}
        />

        {imagePreview && (
          <div className={styles.imagePreviewContainer}>
            <img
              src={imagePreview}
              alt="Preview"
              className={styles.imagePreview}
            />
          </div>
        )}

        <Button
          variant="contained"
          onClick={handleSubmit}
          className={styles.submitButton}
          sx={{ mt: 2 }}
        >
          Post
        </Button>
      </Box>

      <Footer />
    </Fragment>
  );
};

export default AddPost;

// To be continued tomorrow...
// I will continue with the implementation of the AddPost component.
// Create a context to manage the state of the currently logged in user globally
