import React from "react";
import "./Product.css";
import tv from "../../assets/images/tv.png";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-content">
        <h4>Big Baker Electronics</h4>
        <h2>Samsung 40N5300 S..</h2>
        <img src={tv} alt="" />
        <p>$ 109.52</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
