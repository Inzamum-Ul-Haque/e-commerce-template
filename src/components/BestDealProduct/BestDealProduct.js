import React from "react";
import "./BestDealProduct.css";

const BestDealProduct = ({ catData }) => {
  return (
    <div className="best-deal-product-container">
      <div className="name-price">
        <h4>{catData.title}</h4>
        <p>$ {catData.price}</p>
        <div>
          <p>Save 10%</p>
        </div>
      </div>
      <div className="offer-image">
        <h2>
          <span>Special</span> Offer
        </h2>
        <img src={catData.image} alt="" />
      </div>
    </div>
  );
};

export default BestDealProduct;
