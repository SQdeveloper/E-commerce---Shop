import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'
import data from './db/data'

function App() {
  const [listProducts, setListProducts] = useState(data);
  const [companySelected, setCompanySelected] = useState("all");
  const [categorySelected, setCategorySelected] = useState("sneakers");
  const [priceSelected, setPriceSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);

  // Filter with Search Input
  const filteredSearch = (e)=>{    
    const newListProducts = data.filter(product =>       
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    )

    setListProducts(newListProducts);
  }

  useEffect(()=>{
    filteredRadioInput();      
  }, [companySelected, categorySelected])
  
  // Filter with Radio Input
  const filteredRadioInput = ()=>{    
    const newListProducts = data.filter(product =>
      product.category.toLowerCase() === categorySelected &&
      companySelected.includes(product.company)
      // product.newPrice === priceSelected ||
      // product.color === colorSeleted
    )    
    setListProducts(newListProducts)
  }

  return (
    <>
      <Sidebar setCategorySelected={setCategorySelected} setPriceSelected={setPriceSelected} setColorSelected={setColorSelected}/>
      <Nav handleSearch={filteredSearch}/>
      <Recommended setCompanySelected={setCompanySelected}/>
      <Products listProducts={listProducts}/>
    </>
  )
}

export default App
