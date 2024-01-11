import "./footer.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import { FaRegCopyright, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="col form">
          <div className="inp-group">
            <label htmlFor="lang">Language</label>
            <select id="lang">
              <option value="en">Arabic (AR)</option>
              <option value="en">English (US)</option>
            </select>
          </div>
          <div className="inp-group">
            <label htmlFor="currency">Currency</label>
            <select id="currency">
              <option value="egy">EGY (Pound)</option>
              <option value="en">UAE (Dirham)</option>
            </select>
          </div>
        </div>

        <div className="col">
          <h3>Support</h3>
          <ul className="links">
            <li>
              <a href="">contact</a>
            </li>
            <li>
              <a href="">Legal Notice</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">General Terms</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h3>Company</h3>
          <ul className="links">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Gift cards</a>
            </li>
            <li>
              <a href="">Magazine</a>
            </li>
            <li>
              <a href="">Travel Guides</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h3>Work With Us</h3>
          <h4>Become a Suplier</h4>
          <h4>Become an Affilliate Partner</h4>
          <ul className="links media">
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <h5>
            Copyright <FaRegCopyright /> 2023 Egypt Desirt Safari
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
