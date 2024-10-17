<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './compoents/Login/Login';
import Register from './compoents/Register/Register';
import LogoLoad from './compoents/LoadLogo/LoadLogo';
import Profile from './compoents/Profile/Profile';
=======
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./compoents/Login/Login";
import Register from "./compoents/Register/Register";
import LogoLoad from "./compoents/LoadLogo/LoadLogo";
import Home from "./compoents/pages/Home/Home";
import AddPost from "./compoents/pages/addPost/addPost";
import Profile from "./compoents/pages/Profile/Profile";

>>>>>>> 7bf810c7d461c5a8648809ffff6049fbd34ae767
function App() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth < 500
  ); // Tablet and below

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 500); // Update state based on screen width
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

<<<<<<< HEAD
	return (
		<>
			{!isMobileOrTablet ? (
				//! donot touch
				<div className='start'>
					<h1>Sorry, this app is only available on mobile</h1>
					<h3>
						Please visit the site on a mobiledevice to access the content.
					</h3>
				</div>
			) : (
				<Routes>
					<Route path='/' element={<LogoLoad />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/home' element={<h1>Home Page</h1>} />
					<Route path='/profile' element={<Profile />}></Route>
				</Routes>
			)}
		</>
	);
=======
  return (
    <>
      {!isMobileOrTablet ? (
        //! donot touch
        <div className={styles.start}>
          <h1>Sorry, this app is only available on mobile</h1>
          <h3>
            Please visit the site on a mobiledevice to access the content.
          </h3>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LogoLoad />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </>
  );
>>>>>>> 7bf810c7d461c5a8648809ffff6049fbd34ae767
}
export default App;
