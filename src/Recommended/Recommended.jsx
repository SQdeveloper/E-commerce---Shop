import React from 'react';
import "./Recommended.css"

function Recommended() {
    return (
        <div className='recommended'>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-btns'>
                <button>All Products</button>
                <button>Nike</button>
                <button>Adidas</button>
                <button>Puma</button>
                <button>Vans</button>
            </div>
        </div>
    );
}

export default Recommended;