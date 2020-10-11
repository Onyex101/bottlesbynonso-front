import React from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    return (
        <ul className="list-inline mr-2 mb-0">
            <li className="list-inline-item mr-0">
                <i className="text-warning"><FaStar/></i>
            </li>
            <li className="list-inline-item mr-0">
                <i className="text-warning"><FaStar/></i>
            </li>
            <li className="list-inline-item mr-0">
                <i className="text-warning"><FaStar/></i>
            </li>
            <li className="list-inline-item mr-0">
                <i className="text-warning"><FaStar/></i>
            </li>
            <li className="list-inline-item mr-0">
                <i className="text-gray-300"><FaStar/></i>
            </li>
        </ul>
    )
}

export default StarRating;
