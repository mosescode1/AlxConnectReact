import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    setCurrentlyLoggedInUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // Set decoded token payload (user info)
        const userData = {
          id: decoded.sub, // user ID from token
          username: decoded.username, // username from additional claims
          email: decoded.email, // email from additional claims
          profile_picture: decoded.profile_picture,
        };
        setCurrentlyLoggedInUser(userData);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ currentlyLoggedInUser, setCurrentlyLoggedInUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
