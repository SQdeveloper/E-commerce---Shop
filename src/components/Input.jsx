import React from 'react';

const Input = ({handleInput, title, value, name}) => {         

    return (
        <label className="sidebar-label">
            <input onClick={handleInput} type="radio" value={value} name={name}/>
            <span className='checkmark'></span>
            {title}
        </label>
    );
};

export default Input;