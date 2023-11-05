import React from 'react';
import CardProduct from '../components/CardProduct';
import "./Products.css"

const Products = ({listProducts}) => {
    return (
        <ul className='content-products'>
            {listProducts.map((product, index)=>(                
                <CardProduct key={index} img={product.img} title={product.title} reviews={product.reviews} prevPrice={product.prevPrice} newPrice={product.newPrice}/>                                
            ))}            
            {listProducts.length === 0 && <h2>I'am sorry, there's nothing show you</h2>}
        </ul>
    );
};

export default Products;