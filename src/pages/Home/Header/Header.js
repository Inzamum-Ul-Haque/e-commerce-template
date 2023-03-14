import React from "react";
import "./Header.css";
import winStorelogo from "../../../assets/logo/Vector 1.png";
import { BsHeadphones, BsCart4, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import SearchBar from "../../../components/SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="e-commerce-logo">
        <img src={winStorelogo} alt="" />
        <h3>store</h3>
        <SearchBar />
      </div>
      <div className="header-icons">
        <div className="contact">
          <p>Call us now</p>
          <p>
            <span>
              <BsHeadphones />
            </span>{" "}
            <span>+011 5827918</span>
          </p>
          <p>
            <a href="/">Sign In</a>
          </p>
        </div>
        <div className="cart-icons">
          <BsPerson />
          <AiOutlineHeart />
          <span>
            <BsCart4 />
            <span>Cart</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
