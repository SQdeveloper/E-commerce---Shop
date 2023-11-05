import React from 'react';
import {AiFillShop} from 'react-icons/ai'
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import './Sidebar.css';

const Sidebar = ({setColorSelected, setPriceSelected, setCategorySelected}) => {
    return (
        <div className='sidebar'>
            <header className="sidebar-header">
                <AiFillShop/>
            </header>
            <Category setCategorySelected={setCategorySelected}/>
            <Price setPriceSelected={setPriceSelected}/>
            <Colors setColorSelected={setColorSelected}/>
        </div>
    );
};

export default Sidebar;