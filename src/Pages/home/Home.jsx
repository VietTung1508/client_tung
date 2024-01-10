import React from "react";
import Banner from "./banner.jsx";
import Category from "./category.jsx";
import BestSeller from "./BestSeller.jsx";
import FeaturedProducts from "../Products/Products.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BestSeller />
    </div>
  );
};

export default Home;
