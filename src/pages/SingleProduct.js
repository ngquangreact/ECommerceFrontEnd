import { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCart from "../components/ProductCard";
import ReactStars from 'react-rating-stars-component';

const SingleProduct = () => {
    const [orderedProduct,setOrderedProduct] = useState(true)
    return (
        <>
            <Meta title="Product Name"/>
            <BreadCrumb title="Product Name"/>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Description</h4>
                                <p>
                                    We pride ourselves on being the language school with over 140 years of experience. 
                                    Master languages with our immersive Berlitz Method today!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
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
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a className="text-decoration-underline" href=""> Write a Review</a>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <h3 className="section-heading">
                        Our Popular Products
                    </h3>
                    <div className="row">
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                    </div>
                </div>
            </section>
        </>
    )
};

export default SingleProduct;