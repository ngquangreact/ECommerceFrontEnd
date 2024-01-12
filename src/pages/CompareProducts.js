import BreadCrumb from "../components/BreadCrumb";
import Colors from "../components/Colors";
import Meta from "../components/Meta";

const CompareProducts = () => {
    return (
        <>
            <Meta title="Compare Products"/>
            <BreadCrumb title="Compare Products"/>
            <div className="compare-products-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-products-card position-relative">
                                <img 
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute img-fluid cross"
                                />
                                <div className="compare-products-img">
                                    <img src="images/watch.jpg" alt="watch"/>
                                </div>
                                <div className="compare-products-detail">
                                    <h5 className="title">
                                        Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availablity:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Colors:</h5>
                                            <Colors />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Sizes:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-products-card position-relative">
                                <img 
                                    src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute img-fluid cross"
                                />
                                <div className="compare-products-img">
                                    <img src="images/watch.jpg" alt="watch"/>
                                </div>
                                <div className="compare-products-detail">
                                    <h5 className="title">
                                        Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availablity:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Colors:</h5>
                                            <Colors />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Sizes:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CompareProducts;