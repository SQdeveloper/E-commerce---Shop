import React from 'react';
import Input from '../../components/Input';

const Category = ({setCategorySelected}) => {
    
    const changeCategorySelected = ()=>{        
        const inputActive = document.querySelector("input[name='categoryTest']:checked");
        setCategorySelected(inputActive.value)        
    }

    return (
        <div className="sidebar-content-filter">
            <h2 className='sidebar-title'>Category</h2>
            <Input handleInput={changeCategorySelected} value="All" name="categoryTest" title="All"/>
            <Input handleInput={changeCategorySelected} value="sneakers" name="categoryTest" title="Sneakers"/>
            <Input handleInput={changeCategorySelected} value="flats" name="categoryTest" title="Flats"/>
            <Input handleInput={changeCategorySelected} value="sandals" name="categoryTest" title="Sandals"/>
            <Input handleInput={changeCategorySelected} value="heels" name="categoryTest" title="Heels"/>
        </div>
    );
};

export default Category;