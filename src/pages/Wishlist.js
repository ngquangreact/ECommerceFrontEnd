import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
    return (
        <>
            <Meta title="Wishlist"/>
            <BreadCrumb title="Wishlist"/>
            <div className="wishlist-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img 
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute img-fluid cross"
                                />
                                <div className="wishlist-products-img">
                                    <img src="images/watch.jpg" alt="watch"/>
                                </div>
                                <div>
                                    <h5 className="title">
                                        Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img 
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute img-fluid cross"
                                />
                                <div className="wishlist-products-img">
                                    <img src="images/watch.jpg" alt="watch"/>
                                </div>
                                <div>
                                    <h5 className="title">
                                        Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img 
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute img-fluid cross"
                                />
                                <div className="wishlist-products-img">
                                    <img src="images/watch.jpg" alt="watch"/>
                                </div>
                                <div>
                                    <h5 className="title">
                                        Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Wishlist;