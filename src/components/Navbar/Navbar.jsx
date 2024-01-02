import React from "react";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import "./Navbar.scss";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="navbar">
      <div className="main_nav">
        <img src="./images/logo.png" alt="" className="brand_logo" />
        <div className="main_nav_actions">
          <div className="action">
            <MdOutlineFavoriteBorder className="icon" />
            <h3>Yêu thích</h3>
          </div>
          <div className="action">
            <RiShoppingBag3Line className="icon" />
            <h3>Giỏ hàng ({0})</h3>
          </div>
          <Link to={user ? "/profile" : "/auth"}>
            <div className="action">
              <LuUser2 className="icon" />
              <h3>{user ? user.user.username : "Đăng nhập"}</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="sub_nav">
        <div className="nav_main_category">
          <Link to="products/sale">
            <span>Sale</span>
          </Link>
          <Link to="products/men">
            <span>Nam</span>
          </Link>
          <Link to="products/women">
            <span>Nữ</span>
          </Link>
          <Link to="products/unisex">
            <span>Unisex</span>
          </Link>
          <Link to="products/child">
            <span>Trẻ Em</span>
          </Link>
          <Link to="products/sport">
            <span>Sport</span>
          </Link>
        </div>

        <Search />
      </div>
    </div>
  );
};

export default Navbar;
