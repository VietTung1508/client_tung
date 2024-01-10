import React, { useEffect } from "react";
import "./Payment.scss";
import { FiPackage } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaPen } from "react-icons/fa";

const testData = [
  {
    url: "https://res.cloudinary.com/dqiyre3pg/image/upload/v1704251906/do_an_k14/cvpiusppxj8ccophithx.webp",
    filename: "do_an_k14/cvpiusppxj8ccophithx",
  },
  {
    url: "https://res.cloudinary.com/dqiyre3pg/image/upload/v1704338999/do_an_k14/m8zso24wd8eqawxcjuxy.jpg",
    filename: "do_an_k14/m8zso24wd8eqawxcjuxy",
  },
  {
    url: "https://res.cloudinary.com/dqiyre3pg/image/upload/v1703408625/do_an_k14/d3b3ednkntugxgcz83rz.jpg",
    filename: "do_an_k14/d3b3ednkntugxgcz83rz",
  },
];

const Payment = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("Vui lòng đăng nhập trước khi thanh toán");
      navigate("/");
    }
  }, []);
  return (
    <div className="payment">
      <div className="backToCart">
        <FaArrowLeftLong />
        <p>Trở lại trang giỏ hàng</p>
      </div>
      <img className="logo" src="./images/logo.png" alt="" />
      <h1 className="payment-page-title">Thanh Toán</h1>
      <div className="payment_container">
        <div className="payment_left">
          <div className="user-infomation">
            <h3 className="user-infomation-title">Thông Tin Của Tôi</h3>
            <Link to="/account?page=settings">
              <FaPen className="editBtn" />
            </Link>
            <div className="user-infomation-wrap">
              <div className="user-infomation-wrapper">
                <label>Email:</label>
                <p>{user && user.user.email}</p>
              </div>
              <div className="user-infomation-wrapper">
                <label>Tên người dùng:</label>
                <p>{user && user.user.username}</p>
              </div>
            </div>
            <div className="user-infomation-wrap">
              <div className="user-infomation-wrapper">
                <label>Số điện thoại:</label>
                <p>{user && user.user.phone}</p>
              </div>
              <div className="user-infomation-wrapper">
                <label>Địa chỉ:</label>
                <p>{user && user.user.address}</p>
              </div>
            </div>
          </div>
          <div className="title-detail-order">
            <h3>Chi tiết đơn hàng</h3>
            <span>{testData.length} sản phẩm</span>
          </div>
          <div className="user-order-details">
            <div className="header">
              <div className="left">
                <FiPackage className="icon" />
                <div>
                  <p>Gói Hàng</p>
                  <span>{testData.length} sản phẩm</span>
                </div>
              </div>
              <div className="right">
                <h3>Được vẩn chuyển bởi</h3>
                <p>Viettel Post</p>
              </div>
            </div>
            <div className="details-list">
              {testData.map((t) => (
                <div className="detail-image-wrapper">
                  <img className="detail-image" src={t.url} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="payment_right">
          <div className="payemnt-discounts">
            <h3>Mã Giảm Giá</h3>
            <p>Sử dụng mã giảm giá</p>
          </div>
          <hr />
          <div className="payment-right-price">
            <div className="payment_right-info">
              <h3>Giá trị đơn hàng</h3>
              <h3>Giảm giá</h3>
              <h3>Phí vận chuyển</h3>
            </div>
            <div className="payment_right-info">
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
          <p className="dk">
            Bằng cách tiếp tục, bạn đồng ý với Điều khoản và Điều kiện chung của
            H&M.
          </p>
          <p className="dk">
            Chúng tôi sẽ xử lý dữ liệu cá nhân của bạn theo Thông báo về quyền
            riêng tư của H&M. Xin lưu ý rằng số tiền thuế chỉ là ước tính và số
            tiền cuối cùng có thể thay đổi. Nếu thuế ước tính được trình bày
            dưới dạng TBD thì giá trị đơn hàng không bao gồm bất kỳ khoản thuế
            nào và thuế này sẽ được cộng thêm khi các mặt hàng được vận chuyển.
          </p>
          <Link to="/payment">
            <button className="btnPayment">Xác Nhận Thanh Toán</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
