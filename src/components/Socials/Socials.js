import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="www.facebook.com">
        <FaFacebookF />
      </a>
      <a href="www.twitter.com">
        <FaTwitter />
      </a>
      <a href="www.linkedin.com">
        <FaLinkedinIn />
      </a>
      <a href="www.instagram.com">
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;
