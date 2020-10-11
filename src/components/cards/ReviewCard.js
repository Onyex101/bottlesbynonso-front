import React from 'react';
import Rating from '../ui/StarRating';

const ReviewCard = () => {
    return (
        <div className="media review">
            <div className="text-center mr-4 mr-xl-5">
                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/avatar/person-1.jpg" alt="" className="review-image"/>
                <span className="text-uppercase text-muted">Dec 2019</span>
            </div>
            <div className="media-body">
                <h5 className="mt-2 mb-1">
                    Han Solo
                </h5>
                <div className="mb-2">
                    <Rating/>
                </div>
                <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
            </div>
        </div>
    )
}

export default ReviewCard;
