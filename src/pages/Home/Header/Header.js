import React from "react";
import "./Header.css";
import winStorelogo from "../../../assets/logo/Vector 1.png";
import { BsHeadphones, BsCart4, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <div className="e-commerce-logo">
        <img src={winStorelogo} alt="" />
        <h3>store</h3>
      </div>
      <div className="search-bar">
        <div className="all-categories">
          <select name="categories" id="category">
            <option value="electronics">Electronics</option>
            <option value="bags">Bags</option>
            <option value="laptops">Laptops</option>
            <option value="books">Books</option>
            <option value="cloths">Cloths</option>
            <option value="mobiles">Mobiles</option>
          </select>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search for a product" />
        </div>
      </div>
      <div className="header-icons">
        <div className="contact">
          <p>Call us now</p>
          <p>
            <BsHeadphones /> +011 5827918
          </p>
          <p>Sign In</p>
        </div>
        <div>
          <BsPerson />
          <AiOutlineHeart />
          <BsCart4 />
        </div>
      </div>
    </div>
  );
};

export default Header;
