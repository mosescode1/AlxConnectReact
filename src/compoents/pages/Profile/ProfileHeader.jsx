import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileHeader.module.css";
import menu from "../../../assets/menu.svg";

function ProfileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={classes.head}>
        <nav aria-label="Main Navigation">
          <img
            src={menu}
            alt="Menu icon"
            className={classes.icon}
            onClick={toggleDropdown}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          />
          <div className={classes.menu}>
            {isOpen && (
              <ul className={classes.dropdown} aria-label="Dropdown menu">
                <li className={classes.dropdownItem}>
                  <Link to="/">Home</Link>
                </li>
                <li className={classes.dropdownItem}>
                  <Link to="/logout">Login</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default ProfileHeader;
