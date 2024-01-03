import { Link } from "react-router-dom";
import "./Card.scss";
import { MdFavoriteBorder } from "react-icons/md";
const Card = ({ product }) => {
  const { _id, title, image, color, price, price_sale } = product;
  console.log(color);
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={image.url} alt="" className="card-image" />
        <MdFavoriteBorder className="icon" />
      </div>
      <Link to={`/product/${_id}`}>
        <div className="info-wrapper">
          <h5 className="card-title">{title}</h5>
          <div className="card-price-wrapper">
            {price_sale && (
              <h2 className="card-price-sale">
                {price_sale.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </h2>
            )}

            <h2 className={`card-price ${price_sale && "sale"}`}>
              {price_sale ? (
                <strike>
                  {price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </strike>
              ) : (
                price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
              )}
            </h2>
          </div>
          {color.map((c) => (
            <div
              className="card-color"
              style={{ backgroundColor: c.toLowerCase() }}
            />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Card;
