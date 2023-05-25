import React from "react";
import LogoFooter from "../../Assets/logoFooter.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../Footer/footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__column">
          <img className="img_footer" src={LogoFooter} alt="description" />
        </div>
        <div className="footer__column">
          <h3>Discover</h3>

          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="aboutUs" style={{ textDecoration: "none" }}>
              <li>About Us</li>
            </Link>
            <Link to="contactus" style={{ textDecoration: "none" }}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Other Links</h3>
          <ul>
            <a href="/terms">
              <li>Terms and Conditions</li>
            </a>
            <a href="/refund">
              {" "}
              <li>Refund and Return</li>
            </a>
            <a href="/privacy">
              {" "}
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>

        <div className="footer__column footer__contact">
          <h3>Contact Us</h3>
          <p>Phone: +961 76 702 770</p>
          <p>Email: hasan@gmail.com</p>
          <div>
            <a href="https://instagram.com/">
              <FaInstagram className="instagram-footer" />
            </a>
            <a href="https://wa.me/">
              <FaWhatsapp className="instagram-footer" />
            </a>
          </div>
        </div>
      </div>
      <div className="copywrite-footer">
        <p>© 2023 Hasan El-Mestrah All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
