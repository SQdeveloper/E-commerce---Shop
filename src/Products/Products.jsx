import React from 'react';
import CardProduct from '../components/CardProduct';
import "./Products.css"

const Products = ({listProducts}) => {
    return (
        <ul className='content-products'>
            {listProducts.map((product, index)=>(                
                <CardProduct key={index} img={product.img} title={product.title} reviews={product.reviews} prevPrice={product.prevPrice} newPrice={product.newPrice}/>                
            ))}            
        </ul>
    );
};

export default Products;