import React from 'react';
import Input from '../../components/Input';

const Category = () => {
    return (
        <div className="sidebar-content-filter">
            <h2 className='sidebar-title'>Price</h2>
            <Input name="priceTest" title="$0-$50"/>
            <Input name="priceTest" title="$50-$100"/>
            <Input name="priceTest" title="$100-$150"/>
            <Input name="priceTest" title="Over $150"/>
        </div>
    );
};

export default Category;