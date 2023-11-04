import React from 'react';
import Input from '../../components/Input';

const Category = () => {
    return (
        <div className="sidebar-content-filter">
            <h2 className='sidebar-title'>Category</h2>
            <Input name="categoryTest" title="Snikers"/>
            <Input name="categoryTest" title="Flats"/>
            <Input name="categoryTest" title="Sanldals"/>
            <Input name="categoryTest" title="Heels"/>
        </div>
    );
};

export default Category;