import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="all-categories">
        <select name="categories" id="category">
          <option value="all categories" selected disabled hidden>
            All Categories
          </option>
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
  );
};

export default SearchBar;
