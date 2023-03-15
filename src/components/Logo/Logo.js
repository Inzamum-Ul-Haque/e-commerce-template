import React from "react";
import logo from "../../assets/logo/Vector 1.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="e-commerce-logo">
      <img src={logo} alt="" />
      <h3>store</h3>
    </div>
  );
};

export default Logo;
