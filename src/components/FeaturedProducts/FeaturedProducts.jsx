import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card.jsx";
import axiosClient from "../../api/axiosClient.js";

const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const res = await axiosClient.get("product/products");
        setProducts(res.data);
      };
      getProducts();
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(products);

  return (
    <div className="cards">
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
