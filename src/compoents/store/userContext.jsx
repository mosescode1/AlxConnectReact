import React from "react";

const UserContext = React.createContext({
  currentlyLoggedInUser: null, // Set initial value
});

export default UserContext;
