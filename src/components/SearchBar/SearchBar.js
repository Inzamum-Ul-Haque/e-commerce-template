import React from "react";
import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="searchbox">
        <div className="dropdown">
          <div className="defaultOption">
            All categories <IoIosArrowDown />
          </div>
          <ul className="ul">
            <li>Electronics</li>
            <li>Cloths</li>
            <li>Mobiles</li>
            <li>Laptops</li>
          </ul>
        </div>
        <div className="searchField">
          <input type="text" placeholder="Search for products" />
          <div>
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
