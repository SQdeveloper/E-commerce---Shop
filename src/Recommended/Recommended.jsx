import React from 'react';
import "./Recommended.css"

function Recommended({setCompanySelected}) {
    return (
        <div className='recommended'>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-btns'>
                <button onClick={()=>{setCompanySelected("All")}}>All Products</button>
                <button onClick={()=>{setCompanySelected("Nike")}}>Nike</button>
                <button onClick={()=>{setCompanySelected("Adidas")}}>Adidas</button>
                <button onClick={()=>{setCompanySelected("Puma")}}>Puma</button>
                <button onClick={()=>{setCompanySelected("Vans")}}>Vans</button>
            </div>
        </div>
    );
}

export default Recommended;