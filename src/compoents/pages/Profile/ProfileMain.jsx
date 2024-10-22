import { Avatar } from '@mui/material';
import classes from './profileheader.module.css';
function ProfileMain() {
	return (
		<>
			<main>
				<div className={classes.main}>
					<div className={classes.avatar}>
						<Avatar className={classes.scale} />
					</div>
				</div>
				<div className={classes.userName}>
					<h2>@ossigma</h2>
					<hr />
				</div>

				{/* RECENT POST */}
				<div className={classes.recentPosts}>
					<h2>Recent Posts</h2>
				</div>
			</main>
		</>
	);
}

export default ProfileMain;
