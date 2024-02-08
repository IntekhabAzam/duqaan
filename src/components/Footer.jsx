import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contacts">
        <h4>Contact Us</h4>
        <p>+91 7838218635</p>
        <p>+91 9313597484</p>
      </div>
      <div className="company">
        <img src={logo} alt="Logo" />
        <p>&quot;One Stop Destination For Stylish Handbags&quot;</p>
      </div>
      <div className="social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a
            href="https://api.whatsapp.com/send?phone=917838218635"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/duqaan_?igsh=NGp4MGI4ZXBpZ25u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
