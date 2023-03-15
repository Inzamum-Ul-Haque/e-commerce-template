import React from "react";
import "./Footer.css";
import visa from "../../../assets/images/VISA.png";
import mastercard from "../../../assets/images/MASTER.png";
import cash from "../../../assets/images/image 128.png";
import installments from "../../../assets/images/INSLALLMENTS.png";
import Socials from "../../../components/Socials/Socials";
import Logo from "../../../components/Logo/Logo";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="upper-part">
        <div className="links">
          <div className="contact-info">
            <div>
              <Logo />
              <p className="footer-subheadings">Got questions? Call us 24/7!</p>
              <p>03 111 666 144</p>
              <p>03171 777015</p>
            </div>
            <div>
              <p className="footer-subheadings">Contact Info</p>
              <p>info@winstore.pk</p>
            </div>

            <Socials />
          </div>
          <div className="trending">
            <p className="footer-subheadings">Trending</p>
            <a href="/">Installments</a>
            <a href="/">Electronics</a>
            <a href="/">Grocery</a>
            <a href="/">Health & Beauty</a>
            <a href="/">Home Appliances</a>
            <a href="/">Mobile Accessories</a>
          </div>
          <div className="information">
            <p className="footer-subheadings">Information</p>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
            <a href="/">FAQ's</a>
            <a href="/">Shipping & Return</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
          </div>
          <div className="customer-care">
            <p className="footer-subheadings">Customer Care</p>
            <a href="/">My Account</a>
            <a href="/">Track Your Order</a>
            <a href="/">Recently Viewed</a>
            <a href="/">Wishlist</a>
            <a href="/">Compare</a>
            <a href="/">Become a Vendor</a>
          </div>
        </div>
        <div className="cards container">
          <div className="box">
            <img src={installments} alt="" />
          </div>
          <div className="box">
            <img src={cash} alt="" />
          </div>
          <div className="box">
            <img src={mastercard} alt="" />
          </div>
          <div className="box">
            <img src={visa} alt="" />
          </div>
        </div>
      </div>
      <div className="lower-part">
        <p>© 2021 Winstore. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
