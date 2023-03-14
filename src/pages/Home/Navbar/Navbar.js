import React from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="menu-icon">
        <AiOutlineMenu />
        <h3>Browse From Category</h3>
      </div>
      <div className="menu-links">
        <a href="/">Home</a>
        <a href="/">Easy Monthly Installments</a>
        <a href="/">Shop by Brands</a>
        <a href="/">Become a Vendor</a>
      </div>
    </div>
  );
};

export default Navbar;
