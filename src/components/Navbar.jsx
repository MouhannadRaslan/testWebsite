import NavStyle from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <h1 className={NavStyle.navLogo}>logo</h1>
      <ul className={NavStyle.navbar}>
        <li className={NavStyle.navItem}>
          <Link className={NavStyle.navLink} to="/">Home</Link>
        </li>
        <li className={NavStyle.navItem}>
          <Link className={NavStyle.navLink} to="/about">About Us</Link>
        </li>
        <li className={NavStyle.navItem}>
          <Link className={NavStyle.navLink} to="/landing">Landing</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
