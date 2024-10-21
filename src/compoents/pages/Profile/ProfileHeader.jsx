import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import classes from "./ProfileHeader.module.css";
import Icon from "./menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import Edit from "./edit_icon.svg";
import profilepic from "./images/Profile2.png";
import photo from "./images/profilePic.png";
import photo2 from "./images/photo-2.jpg";
import photo3 from "./images/photo-3.jpg";
import photo4 from "./images/photo-4.jpg";
import photo5 from "./images/photo-5.jpg";
import photo6 from "./images/photo-6.jpg";
import reels1 from "./images/profilePic.png";
import saved1 from "./images/photo-3.jpg";

function ProfileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    username: "Vanessa Joshua",
    handle: "@nessaJ",
    posts: 300,
    followers: 100,
    following: 80,
    interests: ["Music", "UIUX", "Art", "Education"],
    images: [photo, photo2, photo3, photo4, photo5, photo6]
  });

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
            <h2>{profileData.username}</h2>
            <p>{profileData.handle}</p>
          </div>
          <section className={classes.interest}>
            <ul>
              {profileData.interests.map((interest, index) => (
                <li key={index} className={classes.interestList}>
                  <h3>{interest}</h3>
                </li>
              ))}
            </ul>
          </section>

          {/*List Number of posts, followers and following section */}
          <section className={classes.update}>
            <ul>
              <section className={classes.userUpdate}>
                <div className={classes.posts}>
                  <li><h2 className={classes.listhead}>{profileData.posts}</h2></li>
                  <li>Posts</li>
                </div>
                <div className={classes.followers}>
                  <li><h2 className={classes.listhead}>{profileData.followers}</h2></li>
                  <li>Followers</li>
                </div>
                <div className={classes.following}>
                  <li><h2 className={classes.listhead}>{profileData.following}</h2></li>
                  <li>Following</li>
                </div>
              </section>
              <div className={classes.reels}>
                <li>
                  <h2  className={classes.listhead}>All</h2>
                </li>
                <li>
                  <h2 className={classes.listhead}>Reels
                  </h2>
                </li>
                <li>
                  <h2 className={classes.listhead}>Saved</h2>
                </li>
              </div>
            </ul>
            <hr />
          </section>
        </section>
      </section>
      <section className={classes.images}>
        {profileData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`photo-${index + 1}`}
            aria-label={`photo-${index + 1}`}
            width={"130px"}
            className={classes.photo}
          />
        ))}
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default ProfileHeader;
