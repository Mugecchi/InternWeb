import React from "react";
import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa"; // Import icons
import "./ContactUs.css"; // Import your CSS file for styling

const ContactUs = () => {
  const iconSize = 32; // Set the desired size for icons

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="icon" size={iconSize} />
          <span>Contact Us</span>
        </div>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" size={iconSize} />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon" size={iconSize} />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" size={iconSize} />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.tiktok.com/@ulapbiz?lang=enm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="icon" size={iconSize} />
          <span>Accounting and Beyond</span>
        </a>
        <a href="mailto:info@example.com">
          <FaEnvelope className="icon" size={iconSize} />
          <span>Email</span>
        </a>
        <a
          href="https://radztech.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe className="icon" size={iconSize} />
          <span>sales@radztech.com</span>
        </a>
        <a href="https://ulap.biz//" target="_blank" rel="noopener noreferrer">
          <FaGlobe className="icon" size={iconSize} />
          <span>ulap.biz</span>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
