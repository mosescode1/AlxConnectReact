import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import classes from "./ProfileHeader.module.css";
import Icon from "./menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import Edit from "./edit_icon.svg";
import profilepic from "./Profile2.png";

function ProfileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={classes.head}>
        <nav aria-label="Main Navigation" className={classes.nav}>
          <button>
            <img
              src={Icon}
              alt="Menu icon"
              className={classes.icon}
              onClick={toggleDropdown}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            />
          </button>
          <div className={classes.menu}>
            {isOpen && (
              <ul className={classes.dropdown} aria-label="Dropdown menu">
                <li className={classes.dropdownItem}>
                  <Link to="/">Home</Link>
                </li>
                <li className={classes.dropdownItem}>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
      <section>
        <div className={classes.picContain}>
          <img 
            src={profilepic}
            alt="Profile Picture"
            className={classes.profilePic}
            aria-label="profile"
          />
          <button className={classes.editProfile}>
            <img 
              src={Edit}
              alt="Edit Profile"
              aria-label="edit"
              className={classes.edit}
            />
          </button>
        </div>
      </section>
      <section>
        <section className={classes.userName}>
          <div className={classes.usernameHP}>
            <h2>Vanessa Joshua</h2>
            <p>@nessaJ</p>
          </div>
          <section className={classes.interest}>
            <ul>
              <li className={classes.interestList}><h3>Music</h3></li>
              <li className={classes.interestList}><h3>UIUX</h3></li>
              <li className={classes.interestList}><h3>Art</h3></li>
              <li className={classes.interestList}><h3>Education</h3></li>
            </ul>
          </section>

          {/*List Number of posts, followers and following section */}
          <section className={classes.update}>
            <ul>
              <div className={classes.posts}>
                <li><h2 className={classes.listhead}>300</h2></li>
                <li><h2 className={classes.listhead}>100</h2></li>
                <li><h2 className={classes.listhead}>80</h2></li>
              </div>
              <div className={classes.following}>
                <li>Posts</li>
                <li>Followers</li>
                <li>Following</li>
              </div>
              <div className={classes.reels}>
                <li><h2 className={classes.listhead}>All</h2></li>
                <li><h2 className={classes.listhead}>Reels</h2></li>
                <li><h2 className={classes.listhead}>Saved</h2></li>
              </div>
            </ul>
            <hr />
          </section>
        </section>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default ProfileHeader;
