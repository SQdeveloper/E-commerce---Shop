import { useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'
import data from './db/data'

function App() {
  const [listProducts, setListProducts] = useState(data);

  const filteredSearch = (e)=>{
    const newListProducts = data.filter(product =>       
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    )

    setListProducts(newListProducts);
  }

  const filteredCompany = (company)=>{
    const newListProducts = data.filter(product =>
      product.company.includes(company)
    )
    
    setListProducts(newListProducts);
  }

  return (
    <>
      <Sidebar/>
      <Nav handleSearch={filteredSearch}/>
      <Recommended handleFilterWithCompany={filteredCompany}/>
      <Products listProducts={listProducts}/>
    </>
  )
}

export default App
