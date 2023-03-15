import React from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import Socials from "../../../components/Socials/Socials";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-menu">
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
      <Socials />
    </div>
  );
};

export default Navbar;
