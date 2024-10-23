import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../Header/header.module.css';
import { useState } from 'react';

const DropdownMenu = ({ onLogout }) => {
	return (
		<div className={styles.dropdownStyle}>
			<button onClick={() => alert('Edit Profile Clicked')}>
				Edit Profile
			</button>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
};

const ProfileHeader = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleLogout = () => {
		// Implement your logout logic here
		console.log('User logged out');
		// For example, you might clear user data or redirect
		alert('Logged out successfully!');
	};

	return (
		<div className={styles.header}>
			<h2>AlxConnect</h2>
			<div className={styles.side}>
				{/* NOtification */}
				<Badge badgeContent='2' color='primary'>
					<CircleNotificationsIcon className={styles.scale} />
				</Badge>
				{/* Profile Image */}
				<MenuIcon
					className={styles.scaleHamburger}
					onClick={() => setIsOpen((s) => !s)}
				/>
				{isOpen && <DropdownMenu onLogout={handleLogout} />}
			</div>
		</div>
	);
};

export default ProfileHeader;
