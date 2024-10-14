import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Post from '../../../compoents/LoadPost/Post';
import ImageGroup from '../../ImageGroup/ImageGroup';

const Home = () => {
	return (
		<div>
			<Header />
			<ImageGroup />
			<Post />
			<Footer />
		</div>
	);
};

export default Home;
