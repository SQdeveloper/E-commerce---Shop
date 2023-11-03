import React from 'react';
import CardProduct from '../components/CardProduct';
import data from '../db/data';
import "./Products.css"

const Products = () => {
    return (
        <ul className='content-products'>
            {data.map((product, index)=>(                
                <CardProduct key={index} img={product.img} title={product.title} reviews={product.reviews} prevPrice={product.prevPrice} newPrice={product.newPrice}/>                
            ))}            
        </ul>
    );
};

export default Products;