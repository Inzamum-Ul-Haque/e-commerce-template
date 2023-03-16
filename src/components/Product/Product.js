import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <div className="product-content">
        <h4>{product.category}</h4>
        <h2>{product.title}</h2>
        <img src={product.image} alt="" />
        <p>$ {product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
