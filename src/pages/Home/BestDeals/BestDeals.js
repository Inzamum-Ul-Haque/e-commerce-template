import React, { useEffect, useState } from "react";
import BestDealProduct from "../../../components/BestDealProduct/BestDealProduct";
import "./BestDeals.css";

const BestDeals = () => {
  const [isActive, setIsActive] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  // const toggleActive = (id) => {
  //   setIsActive(id);
  // };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const toggleCategory = (categoryName, id) => {
    setIsActive(id);
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  };
  // console.log(categoryData);

  return (
    <div className="best-deals-container">
      <div className="tab-box-container">
        <h2>
          <span>Best</span> Deals
        </h2>
        <div className="tab-box">
          {categories.map((category, id) => (
            <p
              className={`tab-btn ${isActive === id ? "active" : null}`}
              onClick={() => toggleCategory(category, id)}
            >
              {category}
            </p>
          ))}
        </div>
      </div>
      <div className="content-box">
        {categoryData.slice(0, 5).map((catData, idx) => (
          <BestDealProduct catData={catData} />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
