import React from 'react';
import Input from '../../components/Input';

const Category = () => {
    return (
        <div className="sidebar-content-filter">
            <h2 className='sidebar-title'>Colors</h2>
            <Input name="priceTest" title="Snikers"/>
            <Input name="priceTest" title="Flats"/>
            <Input name="priceTest" title="Sanldals"/>
            <Input name="priceTest" title="Heels"/>
        </div>
    );
};

export default Category;