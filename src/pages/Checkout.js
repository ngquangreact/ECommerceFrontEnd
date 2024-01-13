import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Checkout = () => {
    return (
        <>
            <div className="checkout-wraper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div>
                                <h3>Qag Dev.</h3>
                                <nav 
                                    style={{ "--bs-breadcrumb-divider": ">" }}
                                    aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a className="text-dark total-price" href="#">Cart</a></li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active" aria-current="page">Information</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active">Shipping</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className="title total">Contact Information</h4>
                                <p className="user-details total">
                                    Quang Nguyen (ng.quang.coder@gmail.com)
                                </p>
                                <h4 className="mb-3">Shipping Address</h4>
                                <form action="" className="d-flex flex-wrap gap-15 justify-content-between">
                                    <div className="w-100">
                                        <select
                                            className="form-control form-select"
                                        >
                                            <option value="" selected disabled>
                                                Select Country
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apartment, Suite, etc"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <select
                                            className="form-control form-select"
                                        >
                                            <option value="" selected disabled>
                                                Select State
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Zipcode"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/cart" className="text-dark">
                                                <IoArrowBack className="me-2"/>
                                                Return to Cart
                                            </Link>
                                            <Link to="/cart" className="button">Continue</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                <div className="d-flex gap-10 mb-2 align-items-center">
                                    <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span 
                                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                                style={{top: "-10px", right: "2px"}}
                                            >
                                                1
                                                </span>
                                            <img src="images/watch.jpg" className="img-fluid"/>
                                        </div>
                                        <div>
                                            <h5 className="total-price"></h5>
                                            <p className="total-price"></p>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="total">$ 100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 total">Subtotal</p>
                                    <p className="mb-0 total-price">$ 1000</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center pb-4">
                                    <p className="mb-0 total">Shipping</p>
                                    <p className="mb-0 total-price">$ 1000</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center border-top py-4">
                                    <h4 className="total">Total</h4>
                                    <h5 className="total-price">$ 1000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Checkout;