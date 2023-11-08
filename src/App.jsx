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
  const [priceSelected, setPriceSelected] = useState("All");
  const [colorSelected, setColorSelected] = useState("All");
  const [Query, setQuery] = useState("");
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

  // Filter with Price
  const filteredPrice = ()=>{           
    if(priceSelected === "All") return;    
    
    const index = priceSelected.indexOf("-");
    const limitInf = priceSelected.slice(0,index);
    const limitSup = priceSelected.slice(index+1,priceSelected.length);    
    
    if(limitSup === "over") {
      preList = preList.filter(product =>
        Number(product.newPrice) >= Number(limitInf)
      )    
      
    }else {
      preList = preList.filter(product =>
        Number(product.newPrice) >= Number(limitInf) && Number(product.newPrice) <= Number(limitSup)
      )    
    }
  }
  // Filter with Colors
  const filteredColor = ()=>{           
    if(colorSelected === "All") return;      
    
    preList = preList.filter(product =>
      product.color.toLowerCase() === colorSelected.toLowerCase()
    )
  }
  
  // Filter with Search Input
  const filteredSearch = ()=>{    
    preList = preList.filter(product =>       
      product.title.toLowerCase().includes(Query.toLowerCase())
    )
  }

  const updateQuery = (e)=>{
    setQuery(e.target.value);
  }

  useEffect(()=>{  
    filteredProducts()
  }, [colorSelected, companySelected, Query, categorySelected, priceSelected])

  const filteredProducts = ()=> {      
    setListProducts(data);
    filteredCategory(categorySelected);
    filteredCompany();
    filteredPrice();
    filteredColor();
    filteredSearch();
    setListProducts(preList);
  }

  return (
    <>
      <Sidebar setCategorySelected={setCategorySelected} setPriceSelected={setPriceSelected} setColorSelected={setColorSelected}/>
      <Nav handleSearch={updateQuery}/>
      <Recommended setCompanySelected={setCompanySelected}/>
      <Products listProducts={listProducts}/>
    </>
  )
}

export default App
