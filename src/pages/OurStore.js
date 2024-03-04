import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCart from "../components/ProductCard";
import { useEffect, useState } from "react";
import Colors from "../components/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/products/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(3);
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.product.products);

  // have to put this function in useCallback later
  const getAllProductInStore = () => {
    dispatch(getAllProduct());
  };

  useEffect(() => {
    getAllProductInStore();
  }, []);
  return (
    <>
      <Meta title="our store" />
      <BreadCrumb title="our store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-card-title">Shop By Categories</h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-card-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label for="floatingInput">Form</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control py-0"
                        id="floatingInputTo"
                        placeholder="To"
                      />
                      <label for="floatingInputTo">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Colors />
                  </div>
                  <h5 className="sub-title">Sizes</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-1"
                      />
                      <label className="form-check-label" htmlFor="size-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-2"
                      />
                      <label className="form-check-label" htmlFor="size-2">
                        M (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-3"
                      />
                      <label className="form-check-label" htmlFor="size-3">
                        L (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-4"
                      />
                      <label className="form-check-label" htmlFor="size-4">
                        XL (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-card-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex align-items-center flex-wrap gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-card-title">Random Product</h3>
                <div>
                  <div className="random-products">
                    <div className="random-product d-flex mb-2 py-2">
                      <div className="w-40">
                        <img
                          src="images/watch.jpg"
                          className="img-fluid"
                          alt="watch"
                        />
                      </div>
                      <div className="w-60">
                        <h5>
                          Kids headphones bulk 10 pack multi colored for
                          students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b className="price">$100.00</b>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="w-40">
                        <img
                          src="images/watch.jpg"
                          className="img-fluid"
                          alt="watch"
                        />
                      </div>
                      <div className="w-60">
                        <h5>
                          Kids headphones bulk 10 pack multi colored for
                          students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b className="price">$100.00</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select
                      className="form-control form select"
                      defaultValue={"DEFAULT"}
                      id=""
                    >
                      <option value="DEFAULT" disabled>
                        Featured
                      </option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => setGrid(3)}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(4)}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(6)}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(12)}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  {productsState.map((product) => {
                    return (
                      <ProductCart
                        grid={grid}
                        productData={product}
                        key={product._id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
