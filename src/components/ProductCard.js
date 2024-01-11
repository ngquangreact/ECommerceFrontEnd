import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

const ProductCart = (props) => {
    const {grid} = props;
    const location = useLocation();
    return (
        <div className={location.pathname === '/store' ? `gr-${grid}` : "col-3"}>
            <Link className="product-card position-relative">
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src='images/wish.svg' alt='icon'/>
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" alt="product" className='img-fluid'/>
                    <img src="images/watch-1.jpg" alt="product" className='img-fluid'/>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars count={5} size={24} value="4" edit={false} activeColor="#ffd700"/>
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        This is good product in next year, I hope it will become a populor in the future, 
                        This is good product in next year, I hope it will become a populor in the future, 
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <Link>
                            <img src='images/prodcompare.svg' alt='icon'/>
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt='icon'/>
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt='icon'/>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCart;