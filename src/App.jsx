import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './compoents/Login/Login';
import Register from './compoents/Register/Register';
import './LogoLoad.css'; // Create this CSS file for the animation

function App() {
	const [isMobileOrTablet, setIsMobileOrTablet] = useState(
		window.innerWidth < 768
	); // Tablet and below

	useEffect(() => {
		const handleResize = () => {
			setIsMobileOrTablet(window.innerWidth < 768); // Update state based on screen width
		};

		window.addEventListener('resize', handleResize);

		// Cleanup event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{!isMobileOrTablet ? (
				//! donot touch
				<div className='main'>
					<h1>Sorry, this app is only available on mobile</h1>
					<p>
						Please visit the site on a mobile or tablet device to access the
						content.
					</p>
				</div>
			) : (
				<Routes>
					<Route path='/home' element={<h1>Home Page</h1>} />
					<Route path='/' element={<LogoLoad />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			)}
		</>
	);
}

const LogoLoad = () => {
	const navigate = useNavigate();

	// Redirect after 3 seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/login');
		}, 5000); // 3 seconds

		// Cleanup the timer when the component unmounts
		return () => clearTimeout(timer);
	}, [navigate]);
	return (
		<>
			<div className='main'>
				<h1 className='scale'>AlxConnect</h1>
			</div>
		</>
	);
};

export default App;
