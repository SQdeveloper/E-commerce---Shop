import React from 'react';
import "./Recommended.css"

function Recommended({setCompanySelected}) {
    const handleClick = (e)=>{
        //Activamos o desactivamos el estilo de bottom cuando hacen click sobre el
        const allButton = document.querySelectorAll(".recommended-btns button");
        allButton.forEach(button=>{
            button.classList.remove("active");
        })
        e.target.classList.add("active");
        
        //Modifico el estado de la variable companySelected
        setCompanySelected(e.target.value)
    }

    return (
        <div className='recommended'>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-btns'>
                <button onClick={handleClick} value="All"    className='active'>All Companies</button>
                <button onClick={handleClick} value="Nike"   >Nike</button>
                <button onClick={handleClick} value="Adidas" >Adidas</button>
                <button onClick={handleClick} value="Puma"   >Puma</button>
                <button onClick={handleClick} value="Vans"   >Vans</button>
            </div>
        </div>
    );
}

export default Recommended;