import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import Close icon
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Popper,
  Paper,
  Button,
  Fade,
  ClickAwayListener,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import UserContext from "../../store/userContext";
import styles from "../../Header/header.module.css";

const DropdownMenu = ({ onLogout, anchorEl, isOpen, onClose }) => {
  return (
    <Popper
      open={isOpen}
      anchorEl={anchorEl}
      placement="bottom-end"
      transition
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [-1, 1], // Left and top offsets to fine-tune positioning
          },
        },
      ]}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper
            elevation={4}
            sx={{ width: 180 }}
            className={styles.dropdownStyle}
          >
            <ClickAwayListener onClickAway={onClose}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                p={1}
                sx={{ ml: 1 }}
              >
                <Button color="primary" fullWidth>
                  Edit Profile
                </Button>
                <Button onClick={onLogout} color="secondary" fullWidth>
                  Logout
                </Button>
              </Box>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

const ProfileHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    // alert("Logged out successfully!");
  };

  const menuClickHandler = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <div className={styles.header}>
      <Typography variant="h5" component="h2" className={styles.title}>
        AlxConnect
      </Typography>
      <div className={styles.side}>
        {/* Notifications */}
        <Badge badgeContent="2" color="primary">
          <CircleNotificationsIcon className={styles.scale} />
        </Badge>

        {/* Menu Icon for Profile Actions */}
        <IconButton
          onClick={menuClickHandler}
          color="inherit"
          className={styles.menuIcon}
        >
          {isOpen ? (
            <CloseIcon className={styles.scaleHamburger} /> // Display "X" icon when open
          ) : (
            <MenuIcon className={styles.scaleHamburger} /> // Display hamburger icon when closed
          )}
        </IconButton>

        {/* Dropdown Menu */}
        <DropdownMenu
          onLogout={handleLogout}
          anchorEl={anchorEl}
          isOpen={isOpen}
          onClose={() => setAnchorEl(null)}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
