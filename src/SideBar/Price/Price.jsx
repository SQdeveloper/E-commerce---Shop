import React from 'react';
import Input from '../../components/Input';

const Price = ({setPriceSelected}) => {
    const changePriceSelected = ()=>{        
        const inputActive = document.querySelector("input[name='priceTest']:checked");
        setPriceSelected(inputActive.value)        
    }
    return (
        <div className="sidebar-content-filter">
            <h2 className='sidebar-title'>Price</h2>
            <Input handleInput={changePriceSelected} value="All" name="priceTest" title="All"/>
            <Input handleInput={changePriceSelected} value="0-50" name="priceTest" title="$0-$50"/>
            <Input handleInput={changePriceSelected} value="50-100" name="priceTest" title="$50-$100"/>
            <Input handleInput={changePriceSelected} value="100-150" name="priceTest" title="$100-$150"/>
            <Input handleInput={changePriceSelected} value="150-1000000" name="priceTest" title="Over $150"/>
        </div>
    );
};

export default Price;