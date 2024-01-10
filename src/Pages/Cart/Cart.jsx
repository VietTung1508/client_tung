import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { RiDeleteBinLine } from "react-icons/ri";

const items = [
  {
    category: "Áo Thun Nam",
    color: "Grey",
    desc: "Áo thể thao bằng vải tính năng DryMove™ giúp loại bỏ độ ẩm khỏi làn da để bạn luôn thoải mái khô ráo khi vận động. Dáng vừa với cổ tròn và tay ngắn.",
    image: {
      url: "https://res.cloudinary.com/dqiyre3pg/image/upload/v1704251906/do_an_k14/cvpiusppxj8ccophithx.webp",
      filename: "do_an_k14/cvpiusppxj8ccophithx",
    },
    isSale: false,
    price: 249000,
    price_sale: null,
    size: "Small",
    status: true,
    title: "Áo thể thao DryMove",
    _id: "6594d20430ef188afaad9227",
  },
  {
    category: "Quần Dài Nữ",
    color: "Black",
    desc: "Quần jean 5 túi bằng cotton denim giặt phai với cạp cao, nẹp khoá kéo và khuy, ống suông, rộng.",
    image: {
      url: "https://res.cloudinary.com/dqiyre3pg/image/upload/v1704338999/do_an_k14/m8zso24wd8eqawxcjuxy.jpg",
      filename: "do_an_k14/m8zso24wd8eqawxcjuxy",
    },
    isSale: true,
    price: 599000,
    price_sale: 399000,
    size: "Medium",
    status: true,
    title: "Wide High Jeans",
    _id: "659626382e7190a9d536581f",
  },
  {
    category: "Áo Thun Nam",
    color: "Black",
    desc: "Áo thun dáng rộng bằng cotton jersey có cổ tròn, viền gân nổi.",
    image: {
      url: "https://res.cloudinary.com/dqiyre3pg/image/upload/v1703408625/do_an_k14/d3b3ednkntugxgcz83rz.jpg",
      filename: "do_an_k14/d3b3ednkntugxgcz83rz",
    },
    isSale: false,
    price: 249000,
    price_sale: 120000,
    size: "Medium",
    status: true,
    title: "Áo Thun H&M Outdoor",
    _id: "6587f3f4e3b5ced0b3b847c",
  },
];

const CartItem = ({ item }) => {
  return (
    <div className="cart_page_item">
      <div className="image_wrapper">
        <img src={item.image.url} alt="" className="image" />
      </div>
      <div className="info_wrapper">
        <div>
          <h4 className="item-title">{item.title}</h4>
          <h4 className="item-price">
            {item.price_sale
              ? item.price_sale.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
              : item.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
          </h4>
        </div>
        <div className="item-info-wrapper">
          <h4 className="item-id">
            <span>Mã sản phẩm:</span> {item._id}
          </h4>
          <h4 className="item-category">
            <span>Danh mục:</span> {item.category}
          </h4>
        </div>
        <div className="item-info-wrapper">
          <h5>
            <span>Kích cỡ:</span> {item.size}
          </h5>
          <h5>
            <span>Màu sắc:</span> {item.color}
          </h5>
        </div>
        <div className="info_actions">
          <p className="btn-decrese">-</p>
          <p className="quantity">1</p>
          <p className="btn-increase">+</p>
        </div>
      </div>
      <RiDeleteBinLine className="bin_icon" />
    </div>
  );
};

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="cart_page">
      <h2 className="title">Giỏ Hàng</h2>
      <div className="cart_container">
        <div className="cart_left">
          <div className="cart-items">
            {items.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
        </div>
        <div className="cart_right">
          <div className="cart-discounts">
            <h3>Mã Giảm Giá</h3>
            <p>Sử dụng mã giảm giá</p>
          </div>
          {user ? (
            <div>user discount</div>
          ) : (
            <div className="loginButton_wrapper">
              <p>Đăng nhập để sử dụng mã giảm giá thành viên</p>
              <Link to="/auth">
                <button className="btnLogIn">Đăng Nhập</button>
              </Link>
            </div>
          )}
          <hr />
          <div className="cart-right-price">
            <div className="cart-right-info">
              <h3>Giá trị đơn hàng</h3>
              <h3>Giảm giá</h3>
              <h3>Phí vận chuyển</h3>
            </div>
            <div className="cart-right-info">
              <p>100000</p>
              <p>20000</p>
              <p>Miễn phí</p>
            </div>
          </div>
          <hr />
          <div className="total_price">
            <h3>Tổng Tiền</h3>
            <span>200000</span>
          </div>
          <Link to="/payment">
            <button className="btnPayment">Tiến hành thanh toán</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
