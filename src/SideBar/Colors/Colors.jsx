import React from 'react';
import Input from '../../components/Input';

const Colors = ({setColorSelected}) => {
    const changeColorSelected = ()=>{        
        const inputActive = document.querySelector("input[name='colorsTest']:checked");
        setColorSelected(inputActive.value)        
    }

    return (
        <div className="sidebar-content-filter">
            <h2 className='sidebar-title'>Colors</h2>
            <Input handleInput={changeColorSelected} value="All" name="colorsTest" title="All"/>
            <Input handleInput={changeColorSelected} value="Black" name="colorsTest" title="Black"/>
            <Input handleInput={changeColorSelected} value="Blue" name="colorsTest" title="Blue"/>
            <Input handleInput={changeColorSelected} value="Red" name="colorsTest" title="Red"/>
            <Input handleInput={changeColorSelected} value="White" name="colorsTest" title="White"/>
        </div>
    );
};

export default Colors;