import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import classes from './profilehead.module.css';
import Icon from './menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';


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
                    src={Icon} 
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
                            <Link to="/logout">Logout</Link>
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
