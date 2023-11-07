import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'
import data from './db/data'

function App() {
  const [listProducts, setListProducts] = useState(data);
  const [companySelected, setCompanySelected] = useState("All");
  const [categorySelected, setCategorySelected] = useState("All");
  const [priceSelected, setPriceSelected] = useState("");
  const [colorSelected, setColorSelected] = useState("");
  let preList = data;

  // Filter with Category
  const filteredCategory = ()=>{
    if(categorySelected === "All") return;

    preList = preList.filter(product =>
    product.category.toLowerCase() === categorySelected
    )    
  }
  
  // Filter with Company
  const filteredCompany = ()=>{           
    if(companySelected === "All") return;    
    
    preList = preList.filter(product =>
      product.company.toLowerCase() === companySelected.toLowerCase()  
    )
  }

  const filteredPrice = ()=>{           
    if(priceSelected === "All") return;    
    
    const index = priceSelected.indexOf("-");
    const limitInf = Number(priceSelected.slice(0,index));
    const limitSup = Number(priceSelected.slice(index+1,priceSelected.length));    
    
    preList = preList.filter(product =>
      Number(product.newPrice) >= limitInf && Number(product.newPrice) <= limitSup      
    )
  }
  // Filter with Colors
  const filteredColor = ()=>{           
    if(colorSelected === "All") return;      
    
    preList = preList.filter(product =>
      product.color.toLowerCase() === colorSelected.toLowerCase()
    )
  }
  
  // Filter with Search Input
  const filteredSearch = (e)=>{    
    preList = preList.filter(product =>       
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    )    
  }

  useEffect(()=>{  
    filteredProducts()
  }, [colorSelected, companySelected, categorySelected, priceSelected])

  const filteredProducts = ()=> {      
    setListProducts(data);
    filteredCategory();
    filteredCompany();
    filteredPrice();
    filteredColor();
    setListProducts(preList);
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
