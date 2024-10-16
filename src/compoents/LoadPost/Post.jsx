import styles from './Post.module.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = () => {
	return (
		<>
			<section className={styles.container}>
				<Card>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
								R
							</Avatar>
						}
						title='Shrimp and Chorizo Paella'
						subheader='September 14, 2016'
					/>

					<CardContent>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests. Add 1 cup of frozen peas along
							with the mussels, if you like.
						</Typography>
					</CardContent>

					<CardActions disableSpacing>
						<IconButton aria-label='add to favorites'>
							<FavoriteIcon />
						</IconButton>
					</CardActions>
				</Card>

				<Card>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
								R
							</Avatar>
						}
						title='Shrimp and Chorizo Paella'
						subheader='September 14, 2016'
					/>

					<CardContent>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests. Add 1 cup of frozen peas along
							with the mussels, if you like.
						</Typography>
					</CardContent>

					<CardActions disableSpacing>
						<IconButton aria-label='add to favorites'>
							<FavoriteIcon />
						</IconButton>
					</CardActions>
				</Card>

				<Card>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
								R
							</Avatar>
						}
						title='Shrimp and Chorizo Paella'
						subheader='September 14, 2016'
					/>

					<CardContent>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests. Add 1 cup of frozen peas along
							with the mussels, if you like.
						</Typography>
					</CardContent>

					<CardActions disableSpacing>
						<IconButton aria-label='add to favorites'>
							<FavoriteIcon />
						</IconButton>
					</CardActions>
				</Card>

				<Card>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
								R
							</Avatar>
						}
						title='Shrimp and Chorizo Paella'
						subheader='September 14, 2016'
					/>

					<CardContent>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests. Add 1 cup of frozen peas along
							with the mussels, if you like.
						</Typography>
					</CardContent>

					<CardActions disableSpacing>
						<IconButton aria-label='add to favorites'>
							<FavoriteIcon />
						</IconButton>
					</CardActions>
				</Card>
			</section>
		</>
	);
};
export default Post;
