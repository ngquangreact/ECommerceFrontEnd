import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { useEffect } from "react";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const removeWishlistItemFromDb = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  
  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const wishListState = useSelector((state) => state.auth.wishList.wishlist);
  console.log(wishListState);
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {wishListState?.map((item) => {
              return (
                <div className="col-3" key={item._id}>
                  <div className="wishlist-card position-relative">
                    <img
                      src="images/cross.svg"
                      alt="cross"
                      className="position-absolute img-fluid cross"
                      onClick={() => removeWishlistItemFromDb(item?._id)}
                    />
                    <div className="wishlist-products-img">
                      <img
                        src={
                          item?.images[0]?.url
                            ? item?.images[0]?.url
                            : "images/watch.jpg"
                        }
                        alt="watch"
                      />
                    </div>
                    <div>
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price mb-3 mt-3">${item?.price}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
