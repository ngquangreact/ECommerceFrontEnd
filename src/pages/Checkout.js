import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { headersConfig } from "../utils/axiosConfig";
import { createAnOrder } from "../features/user/userSlice";

const shippingSchema = yup.object({
  country: yup.string().required("Country is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  address: yup.string().required("Address are required"),
  apartment: yup.string(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  pincode: yup.number().required("Pincode is required"),
});

const Checkout = () => {
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });
  const [cartProductState, setCartProductState] = useState([]);
  const cartState = useSelector((state) => state.auth.cartProducts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      country: "",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      setTimeout(() => {
        checkoutOutHandler();
      }, 300);
    },
  });

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState.length; i++) {
      sum = sum + cartState[i].quantity * cartState[i].price;
    }
    setTotalAmount(sum);
  }, [cartState]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index].productId._id,
        quantity: cartState[index].quantity,
        color: cartState[index].color._id,
        price: cartState[index].price,
      });
    }
    setCartProductState(items);
  }, []);

  const checkoutOutHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }
    const result = await axios.post(
      "http://localhost:5000/api/user/order/checkout",
      { amount: totalAmount },
      headersConfig
    );
    if (!result) {
      alert("Something Went Wrong");
      return;
    }
    const { amount, id: order_id, currency } = result.data.order;

    const options = {
      key: "zrp_test_jk96M1tbCBGW2H", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Developer 's Quang.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          "http://localhost:5000/api/user/order/paymentVerification",
          data,
          headersConfig
        );

        setPaymentInfo({
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
        });

        dispatch(
          createAnOrder({
            totalPrice: totalAmount,
            totolPriceAfterDiscount: totalAmount,
            orderItems: cartProductState,
            paymentInfo,
            shippingInfo,
          })
        );
      },
      prefill: {
        name: "Dev Quang",
        email: "devquang@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "developer 's QuangDev Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
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
                    <li className="breadcrumb-item">
                      <a className="text-dark total-price" href="#">
                        Cart
                      </a>
                    </li>
                    &nbsp; /
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active">
                      Shipping
                    </li>
                    &nbsp; /
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Quang Nguyen (ng.quang.coder@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  onSubmit={formik.handleSubmit}
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <select
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange("country")}
                      onBlur={formik.handleBlur("country")}
                      className="form-control form-select"
                    >
                      <option value="" selected disabled>
                        Select Country
                      </option>
                      <option value="VietNam">Viet Nam</option>
                    </select>
                    <div className="input-error">
                      {formik.touched.country && formik.errors.country}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange("firstName")}
                      onBlur={formik.handleBlur("firstName")}
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                    <div className="input-error">
                      {formik.touched.firstName && formik.errors.firstName}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange("lastName")}
                      onBlur={formik.handleBlur("lastName")}
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                    <div className="input-error">
                      {formik.touched.lastName && formik.errors.lastName}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange("address")}
                      onBlur={formik.handleBlur("address")}
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                    <div className="input-error">
                      {formik.touched.address && formik.errors.address}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      name="apartment"
                      value={formik.values.apartment}
                      onChange={formik.handleChange("apartment")}
                      type="text"
                      className="form-control"
                      placeholder="Apartment, Suite, etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange("city")}
                      onBlur={formik.handleBlur("city")}
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                    <div className="input-error">
                      {formik.touched.city && formik.errors.city}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <select
                      className="form-control form-select"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange("state")}
                      onBlur={formik.handleBlur("state")}
                    >
                      <option value="" selected disabled>
                        Select State
                      </option>
                      <option value="CauGiay">Cau Giay</option>
                    </select>
                    <div className="input-error">
                      {formik.touched.state && formik.errors.state}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      name="pincode"
                      value={formik.values.pincode}
                      onChange={formik.handleChange("pincode")}
                      onBlur={formik.handleBlur("pincode")}
                      type="text"
                      className="form-control"
                      placeholder="Zipcode"
                    />
                    <div className="input-error">
                      {formik.touched.pincode && formik.errors.pincode}
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <IoArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue
                      </Link>
                      <button className="button" type="submit">
                        Place Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                {cartState &&
                  cartState?.map((item) => {
                    return (
                      <div
                        className="d-flex gap-10 mb-2 align-items-center"
                        key={item._id}
                      >
                        <div className="w-75 d-flex gap-10">
                          <div className="w-25 position-relative">
                            <span
                              className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                              style={{ top: "-10px", right: "-20px" }}
                            >
                              {item.quantity}
                            </span>
                            <img
                              src={item?.productId?.images[0]?.url}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div>
                            <h5 className="total-title">
                              {item?.productId?.title}
                            </h5>
                            <p className="total-price">
                              {item?.productId?.color?.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="total">
                            $ {item.price * item.quantity}
                          </h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Subtotal</p>
                  <p className="mb-0 total-price">
                    $ {totalAmount ? totalAmount : "0"}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-4">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$ 5</p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top py-4">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">
                    $ {totalAmount ? totalAmount + 5 : "0"}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
