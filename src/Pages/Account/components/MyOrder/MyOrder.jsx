import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./MyOrder.scss";

const MyOrder = () => {
  return (
    <div className="order">
      <h3>Tất cả đơn hàng</h3>
      <div className="account_orders">
        <div className="noOrder">
          <HiOutlineShoppingBag className="icon" />
          <p>Chưa có đơn hàng nào </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
