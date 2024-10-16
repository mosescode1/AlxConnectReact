import styles from './addPost.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Avatar } from '@mui/material';

const AddPost = () => {
	const [name, setName] = useState('');

	return (
		<>
			<Header />
			<div className={styles.header}>
				<ArrowBackIcon className={styles.icon} />
				<h2 className={styles.text}>Share a post</h2>
			</div>

			<div>
				<Box className={styles.formBox}>
					<div className={styles.text}>
						<Avatar>P</Avatar>
						<h2>Effa Triad</h2>
					</div>
					<TextField
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						fullWidth
						id='post'
						label='New Post'
						variant='standard'
						sx={{
							mt: 2, // margin-top: theme.spacing(1)
						}}
					/>
					<button>Post</button>
				</Box>
			</div>

			<Footer />
		</>
	);
};

export default AddPost;
