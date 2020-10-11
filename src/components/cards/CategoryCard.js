import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    return (
        <div className="banner" style={{backgroundColor: `${category['bg-Color']}`}}>
            <div className="banner-text p-3 p-lg-5">
                <p className="subtitle text-sm" style={{color: `${category.color}`}}>
                    {category['sub-heading']}
                </p>
                <h2 className="mb-0">{category.heading}</h2>
            </div>
            <div className="banner-bg">
                <img src={category.image} alt="" className="img-fluid"/>
            </div>
            <Link to="/" className="stretched-link banner-link">
                <span className="sr-only">{category['link-name']}</span>
            </Link>
        </div>
    )
}

export default CategoryCard;
