import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import styles from './header.module.css';
import Badge from '@mui/material/Badge';

const Header = () => {
	return (
		<div className={styles.header}>
			<h2>AlxConnect</h2>
			<div className={styles.side}>
				{/* NOtification */}
				<Badge badgeContent='2' color='primary'>
					<CircleNotificationsIcon className={styles.scale} />
				</Badge>
				{/* Profile Image */}
				<Avatar sx={{ bgcolor: deepOrange[500] }}>P</Avatar>
			</div>
		</div>
	);
};

export default Header;
