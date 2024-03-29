import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
    return (
        <>
            <Meta title="Cart"/>
            <BreadCrumb title="Cart"/>
            <section className="cart-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Product</h4>
                                <h4 className="cart-col-2">Price</h4>
                                <h4 className="cart-col-3">Quantity</h4>
                                <h4 className="cart-col-4">Total</h4>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 d-flex align-items-center gap-15">
                                    <div className="w-25">
                                        <img className="img-fluid" src="images/watch.jpg" alt="watch"/>
                                    </div>
                                    <div className="w-75">
                                        <p></p>
                                        <p>Size: S</p>
                                        <p>Color: </p>

                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">$100</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input 
                                            type="number"
                                            className="form-control"
                                            min={1}
                                            max={10}
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete className="text-danger"/>
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2 mt-4 d-flex justify-content-between align-items-baseline">
                            <Link to="/products" className="button">Continue To Shopping</Link>
                            <div>
                                <h4>SubTotal: $ 1000</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to="/checkout" className="button">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Cart;