import React, { useEffect, useState } from "react";
import Product from "../../../components/Product/Product";
import "./NewArrivals.css";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="new-arrivals-container">
      <h2 className="heading">
        <span>New</span> Arrivals
      </h2>
      <div className="products">
        {products.slice(0, 10).map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
