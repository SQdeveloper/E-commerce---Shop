import React from 'react';
import "./Recommended.css"

function Recommended({handleFilterWithCompany}) {
    return (
        <div className='recommended'>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-btns'>
                <button onClick={()=>{handleFilterWithCompany("")}}>All Products</button>
                <button onClick={()=>{handleFilterWithCompany("Nike")}}>Nike</button>
                <button onClick={()=>{handleFilterWithCompany("Adidas")}}>Adidas</button>
                <button onClick={()=>{handleFilterWithCompany("Puma")}}>Puma</button>
                <button onClick={()=>{handleFilterWithCompany("Vans")}}>Vans</button>
            </div>
        </div>
    );
}

export default Recommended;