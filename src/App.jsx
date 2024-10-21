import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./compoents/Login/Login";
import Register from "./compoents/Register/Register";
import LogoLoad from "./compoents/LoadLogo/LoadLogo";
import Home from "./compoents/pages/Home/Home";
import AddPost from "./compoents/pages/addPost/addPost";
import ProfileHeader from "./compoents/pages/Profile/ProfileHeader";


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
          <Route path="/profile" element={<ProfileHeader />} />
        </Routes>
      )}
    </>
  );
}
export default App;
