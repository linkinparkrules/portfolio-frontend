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
                Living, learning, & leveling everyday.
            </div>
            <div className={footer.contact}>
                <a
                    href="https://www.facebook.com/Linkinllica/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="mailto: nghiacao1997@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="tel: 0375374231">
                    <i className="fa-solid fa-square-phone"></i>
                </a>
            </div>

        </div>
    );
};

export default Footer;