import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import styles from "./header.module.css";
import Badge from "@mui/material/Badge";
import userContext from "../store/userContext";

const Header = () => {
  const { currentlyLoggedInUser } = useContext(userContext);

  // Extract username initials
  const getInitials = (username) => {
    if (!username) return "";
    return username
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <div className={styles.header}>
      <h2>AlxConnect</h2>
      <div className={styles.side}>
        <Badge badgeContent="2" color="primary">
          <CircleNotificationsIcon className={styles.scale} />
        </Badge>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          {currentlyLoggedInUser
            ? getInitials(currentlyLoggedInUser.username)
            : ""}
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
