import React from "react";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, Fragment, Suspense, lazy } from "react";
import UserContextProvider from "./compoents/store/userContextProvider";
import LogoLoad from "./compoents/LoadLogo/LoadLogo";
import LoadingSpinner from "./compoents/LoadingSpinner/LoadingSpinner";

// Lazy loading components for better app optimization
const Login = lazy(() => import("./compoents/Login/Login"));
const Register = lazy(() => import("./compoents/Register/Register"));
const Home = lazy(() => import("./compoents/pages/Home/Home"));
const AddPost = lazy(() => import("./compoents/pages/addPost/addPost"));
const Profile = lazy(() => import("./compoents/pages/Profile/Profile"));
const UserSearch = lazy(() => import("./compoents/pages/search/UserSearch"));
const UserProfile = lazy(() =>
  import("./compoents/pages/UserProfile/UserProfile")
);

function App() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth < 500
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 500);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UserContextProvider>
      <Fragment>
        {!isMobileOrTablet ? (
          <div className={styles.start}>
            <h1>Sorry, this app is only available on mobile</h1>
            <h3>
              Please visit the site on a mobile device to access the content.
            </h3>
          </div>
        ) : (
          <Suspense fallback={<div>{<LoadingSpinner />}</div>}>
            <Routes>
              <Route path="/" element={<LogoLoad />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/add-post" element={<AddPost />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<UserSearch />} />
              <Route path="/users/:userId" element={<UserProfile />} />
            </Routes>
          </Suspense>
        )}
      </Fragment>
    </UserContextProvider>
  );
}

export default App;
