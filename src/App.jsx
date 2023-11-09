import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'
import useFilter from './Hooks/useFilter'

function App() {
  const {listProducts, setCategorySelected, updateQuery, setCompanySelected, setColorSelected, setPriceSelected} = useFilter();

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
