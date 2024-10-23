import styles from "./Footer.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Person3Icon from "@mui/icons-material/Person3";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  const handleSearch = () => {
    navigate("/home");
  };

  const handleAdd = () => {
    navigate("/add-post");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <div className={styles.footer}>
      <section className={styles.icons}>
        <HomeIcon className={styles.icon} onClick={handleHome} />
        <SearchIcon className={styles.icon} onClick={handleSearch} />
        <AddBoxIcon className={styles.icon} onClick={handleAdd} />
        <Person3Icon className={styles.icon} onClick={handleProfile} />
      </section>
    </div>
  );
};

export default Footer;
