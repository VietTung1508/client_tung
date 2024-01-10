import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
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
    <div className="cartItem">
      <div className="cartItem_img_wrapper">
        <img className="cartItem_img" src={item.image.url} />
      </div>
      <div className="cartItem_info">
        <div className="cartItem_title">{item.title}</div>
        <div className="cartItem_price">
          <div className={`price ${item.price_sale && "price_sale"}`}>
            {item.price_sale
              ? item.price_sale.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
              : item.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
          </div>
        </div>
        <div className="cartItem_quan">Số lượng: 1</div>
        <div className="cartItem_color">Màu sắc: {item.color}</div>
        <div className="cartItem_size">Kích cỡ: {item.size}</div>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <hr />
      <div className="sub-price">
        <div className="sub-price-item">
          <h3>Giá trị đơn hàng</h3>
          <h3>Giảm giá</h3>
          <h3>Phí giao hàng</h3>
        </div>
        <div className="sub-price-item">
          <p>2.999.000</p>
          <p className="sub_price_sale">-899.000</p>
          <p>Miễn Phí</p>
        </div>
      </div>
      <hr />
      <div className="price">
        <h3>Tổng</h3>
        <p>2,100,000</p>
      </div>
      <div className="action_wrapper">
        <div className="actions">
          <Link to="/payment">
            <button className="btnPayment">Thanh Toán</button>
          </Link>
          <Link to="/cart">
            <button className="btnCart">Giỏ Hàng</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
