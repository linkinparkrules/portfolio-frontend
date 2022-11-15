import { NavLink, Link } from 'react-router-dom';
import navbar from './navbar.module.css'

const navLink = (navLinkStatus) => {
  return navLinkStatus.isActive ? navbar.navLinkActive : navbar.navLink
}

const Navbar = () => {
  return (
    <div className={navbar.navbar}>
      <div className={navbar.logo}>
        <Link to="/">
          <i className="fa-solid fa-n"></i>
          <i className="fa-solid fa-c"></i>
        </Link>
      </div>
      <div className={navbar.info}>
        <NavLink className={navLink} to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;