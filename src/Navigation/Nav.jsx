import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import "./Nav.css";

function Nav() {
    return (        
        <nav>
            <input type="text" placeholder='Enter your search shoes'/>

            <div className="nav-options">
                <AiOutlineHeart className="nav-icons"/>   
                <AiOutlineShoppingCart className="nav-icons"/>
                <BsPerson className="nav-icons"/>
            </div>
        </nav>
        
    );
}

export default Nav;