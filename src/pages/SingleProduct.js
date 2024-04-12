import { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCart from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";
import { IoMdHeartEmpty, IoIosGitCompare } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addToCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  console.log(color);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.singleProduct);
  const uploadCart = () => {
    if (color === null) {
      toast.error("Please Choose Color");
      return false;
    } else {
      dispatch(
        addToCart({
          productId: productState._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
    }
  };
  useEffect(() => {
    dispatch(getSingleProduct(getProductId));
  }, []);

  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {
    width: 594,
    height: 500,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
  };

  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                {productState?.images?.map((item) => {
                  return (
                    <div key={item?.url}>
                      <img src={item?.url} className="img-fluid" alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{productState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">${productState?.price}</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={productState?.totalrating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Type: </h3>
                    <p className="product-data">{productState?.category}</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Brand: </h3>
                    <p className="product-data">{productState?.brand}</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Category: </h3>
                    <p className="product-data">{productState?.category}</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Tags: </h3>
                    <p className="product-data">{productState?.tags}</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Availablity: </h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Size: </h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Color: </h3>
                    <Colors
                      setColor={setColor}
                      colorData={productState?.colors}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center gap-15 mt-2 mb-3">
                    <h3 className="product-heading">Quantity: </h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        id=""
                        style={{ width: "70px" }}
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button
                        type="submit"
                        className="button border-0"
                        onClick={() => {
                          uploadCart();
                        }}
                      >
                        Add to Cart
                      </button>
                      <button className="button signup">Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-30">
                    <div>
                      <a href="" className="d-flex gap-1">
                        <IoIosGitCompare className="fs-5" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="" className="d-flex gap-1">
                        <IoMdHeartEmpty className="fs-5" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 my-3">
                    <h3 className="product-heading">Shipping & Return: </h3>
                    <p className="product-data">
                      Free shippping and returns available on all orders! <br />
                      We ship all US domestic orders within{" "}
                      <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-3">
                    <h3 className="product-heading">Product Link: </h3>
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p
                  dangerouslySetInnerHTML={{
                    __html: productState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4>Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className="text-decoration-underline" href="">
                        {" "}
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="form-control w-100"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <p className="mt-3">
                    We pride ourselves on being the language school with over
                    140 years of experience. Master languages with our immersive
                    Berlitz Method today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <h3 className="section-heading">Our Popular Products</h3>
          <div className="row">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
