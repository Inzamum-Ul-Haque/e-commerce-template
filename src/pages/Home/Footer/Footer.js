import React from "react";
import "./Footer.css";
import winStorelogo from "../../../assets/logo/Vector 1.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="upper-part">
        <div className="links">
          <div className="contact-info">
            <img src={winStorelogo} alt="" />
            <h3>store</h3>
            <p className="footer-subheadings">Got questions? Call us 24/7!</p>
            <p>03 111 666 144</p>
            <p>03171 777015</p>
            <p className="footer-subheadings">Contact Info</p>
            <p>info@winstore.pk</p>

            <div className="socials"></div>
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
        <div className="cards">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
        </div>
      </div>
      <div className="lower-part">
        <p>© 2021 Winstore. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
