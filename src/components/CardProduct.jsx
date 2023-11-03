import React from 'react';
import {BsFillBagFill} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"

const CardProduct = ({img, title, reviews, prevPrice, newPrice}) => {    

    return (
        <li className='card-product'>
            <img className='card-img' src={img} alt="product-img" />            
            <h3>{title}</h3>
            <div className="reviews">
                <div className="reviews-stars">
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                </div>
                <span>{reviews}</span>
            </div>
            <div className="card-footer">
                <span className="price">
                    <del>{prevPrice}</del>
                    {newPrice}
                </span>
                <BsFillBagFill/>
            </div>            
        </li>
    );
};

export default CardProduct;