import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../store/userContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./addPost.module.css";
import FlashMessage from "../../FlashMessage.jsx/FlashMessage";

const AddPost = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [open, setOpen] = useState(false); // State to handle Snackbar visibility
  const [message, setMessage] = useState(""); // State to store message content
  const [severity, setSeverity] = useState("success"); // State to define severity (error, success)
  const navigate = useNavigate();

  // Access the currently logged in user from context
  const userctx = useContext(UserContext);
  const { currentlyLoggedInUser } = userctx;

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
    // Form content validation
    if (!name.trim()) {
      setMessage("Post content cannot be empty");
      setSeverity("error");
      setOpen(true);
      return;
    }

    const formData = new FormData();
    formData.append("content", name);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        `http://localhost:9090/api/v1/users/${currentlyLoggedInUser.id}/posts`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        setName(""); // Clear form fields
        setImage(null);
        setImagePreview(null);
        setMessage("Post created successfully");
        setSeverity("success");
        setOpen(true);

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        setMessage("Error creating post");
        setSeverity("error");
        setOpen(true);
      }
    } catch (error) {
      setMessage("Error creating post");
      setSeverity("error");
      setOpen(true);
    }
  };

  return (
    <Fragment>
      <FlashMessage
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
      <Header />
      <div className={styles.header}>
        <ArrowBackIcon className={styles.icon} />
        <h2 className={styles.text}>Share a post</h2>
      </div>

      <Box className={styles.formBox}>
        <div className={styles.userDetails}>
          <Avatar className={styles.avatar}>
            {currentlyLoggedInUser.username[0].toUpperCase()}
          </Avatar>
          <h2 className={styles.username}>{currentlyLoggedInUser.username}</h2>
        </div>

				<TextField
					value={name}
					onChange={(e) => setName(e.target.value)}
					fullWidth
					id='post'
					label='New Post'
					variant='outlined'
					multiline
					rows={4}
					sx={{ mt: 2 }}
				/>

				<input
					type='file'
					accept='image/*'
					onChange={handleImageChange}
					className={styles.fileInput}
				/>

				{imagePreview && (
					<div className={styles.imagePreviewContainer}>
						<img
							src={imagePreview}
							alt='Preview'
							className={styles.imagePreview}
						/>
					</div>
				)}

				<Button
					variant='contained'
					onClick={handleSubmit}
					className={styles.submitButton}
					sx={{ mt: 2 }}>
					Post
				</Button>
			</Box>

			<Footer />
		</Fragment>
	);
};

export default AddPost;
