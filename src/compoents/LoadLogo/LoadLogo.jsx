import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './logoLoad.css';
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

export default LogoLoad;
