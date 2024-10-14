import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Stack } from '@mui/material';
import StyledBadge from '../../../utils/styledBadje';
import styles from './ImageGroup.module.css';

const ImageGroup = () => {
	return (
		<Stack direction='row' spacing={2} className={styles.container}>
			<StyledBadge
				overlap='circular'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				variant='dot'>
				<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
			</StyledBadge>

			<StyledBadge
				overlap='circular'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				variant='dot'>
				<Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
			</StyledBadge>

			<StyledBadge
				overlap='circular'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				variant='dot'>
				<Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
			</StyledBadge>

			<StyledBadge
				overlap='circular'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				variant='dot'>
				<Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
			</StyledBadge>

			<StyledBadge
				overlap='circular'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				variant='dot'>
				<Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
			</StyledBadge>
		</Stack>
	);
};

export default ImageGroup;
