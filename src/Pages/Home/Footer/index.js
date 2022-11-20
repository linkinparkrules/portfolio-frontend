import footer from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={footer.footer}>
            <Link to="/">
                <i className="fa-solid fa-n"></i>
                <i className="fa-solid fa-c"></i>
            </Link>
            <div className={footer.quote}>
                Living, learning, & leveling up one day at a time.
            </div>
            <div className={footer.contact}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-solid fa-envelope"></i>
                <i className="fa-solid fa-square-phone"></i>
            </div>

        </div>
    );
};

export default Footer;