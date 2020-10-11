import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaExpand } from "react-icons/fa";
import Rating from '../ui/StarRating';

const ProductCard = ({product}) => {

    const outOfStock = () => (
        product['sold-out'] ? <div className="product-badge badge badge-secondary">
            sold out
        </div> : null
    );

    return (
        <div className="product">
            <div className="product-image mb-md-3">
                {outOfStock()}
                <Link to="/">
                    <div className="product-swap-image">
                        <img src={product['product-images'][0]} alt="" className="img-fluid product-swap-image-front"/>
                        <img src={product['product-images'][1]} alt="" className="img-fluid"/>
                    </div>
                </Link>
                <div className="product-hover-overlay">
                    <Link className="text-dark text-sm" to="/">
                        <span className="d-none d-sm-inline">Add to cart</span>
                    </Link>
                    <div>
                        <Link className="text-dark text-hover-primary mr-2" to="/">
                            <FaRegHeart className="svg-icon svg-icon-heavy"/>
                        </Link>
                        <Link className="text-dark text-hover-primary text-decoration-none" to="/">
                            <FaExpand className="svg-icon svg-icon-heavy"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <h3 className="text-base mb-1">
                    <Link className="text-dark" to="/">
                        {product.name}
                    </Link>
                </h3>
                <span className="text-gray-500 text-sm">${product.price}</span>
                <div className="product-stars text-xs">
                    <Rating/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
