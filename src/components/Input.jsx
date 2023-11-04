import React from 'react';

const Input = ({title, value, name}) => {
    return (
        <label className="sidebar-label">
            <input type="radio" value={value} name={name}/>
            <span className='checkmark'></span>
            {title}
        </label>
    );
};

export default Input;