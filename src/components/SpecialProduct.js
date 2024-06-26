import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = (props) => {
  const { id, title, brand, price, totalRating, quantity, sold } = props;
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              value={totalRating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">
                ${price} &nbsp;
                {/* <strike>$200</strike> */}
              </span>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex align-items-center gap-10">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: {quantity}</p>
              <div class="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: (quantity / (quantity + sold)) * 100 + "%" }}
                  aria-valuenow={(quantity / (quantity + sold)) * 100}
                  aria-valuemin={quantity}
                  aria-valuemax={quantity + sold}
                ></div>
              </div>
            </div>
            <Link className="button" to={`/products/${id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
