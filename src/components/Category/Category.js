import React from "react";
import "./Category.css";
import electronics from "../../assets/images/electronics.png";

const Category = ({ category }) => {
  return (
    <div className="category-container">
      <div className="img-container">
        <img src={electronics} alt="" />
      </div>
      <div className="category-title">
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <a href="/">Shop</a>
      </div>
    </div>
  );
};

export default Category;
