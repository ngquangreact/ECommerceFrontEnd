import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToWishlist } from "../features/products/productSlice";

const ProductCart = (props) => {
  const { grid, productData } = props;
  const location = useLocation();
  const dispatch = useDispatch();

  const addProductToWishList = (id) => {
    alert(id);
    dispatch(addToWishlist(id));
  };

  return (
    <div className={location.pathname === "/products" ? `gr-${grid}` : "col-3"}>
      <Link
        // to={
        //   location.pathname === "/"
        //     ? "products/:id"
        //     : location.pathname === "/products/:id"
        //     ? "/products/:id"
        //     : ":id"
        // }
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <button
            className="border-0 bg-transparent"
            onClick={() => addProductToWishList(productData?._id)}
          >
            <img src="images/wish.svg" alt="icon" />
          </button>
        </div>
        <div className="product-image">
          <img
            src={productData?.images[0]?.url}
            alt="product"
            className="img-fluid"
          />
          <img src="images/watch-1.jpg" alt="product" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">{productData?.brand}</h6>
          <h5 className="product-title">{productData?.title}</h5>
          <ReactStars
            count={5}
            size={24}
            value={productData?.totalrating}
            edit={false}
            activeColor="#ffd700"
          />
          <p
            className={`description ${grid === 12 ? "d-block" : "d-none"}`}
            dangerouslySetInnerHTML={{ __html: productData?.description }}
          ></p>
          <p className="price">${productData?.price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <button className="border-0 bg-transparent">
              <img src="images/prodcompare.svg" alt="icon" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="images/view.svg" alt="icon" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="images/add-cart.svg" alt="icon" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
