import React from "react";
import "./Header.css";
import winStorelogo from "../../../assets/logo/Vector 1.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="e-commerce-logo">
        <img src={winStorelogo} alt="" />
        <h3>store</h3>
      </div>
      <div className="search-bar"></div>
      <div className="header-icons"></div>
    </div>
  );
};

export default Header;
