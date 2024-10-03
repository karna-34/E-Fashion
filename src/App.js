import './App.css';
import "./index.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/shop';
import Shopcategory from './Components/Pages/shopcategory'
import Product from './Components/Pages/product';
import Cart from './Components/Pages/cart';
import Login from './Components/Pages/login';
import Footer from './Components/Footer/Footer';
import banner_mens from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png"


function App() { 

  

  return (
    <div>
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop /> }/>
        <Route path='/Mens' element={<Shopcategory banner={banner_mens} category="men"/>}/>
        <Route path='/Womens' element={<Shopcategory banner={banner_women} category="women"/>}/>
        <Route path='/Kids' element={<Shopcategory banner={banner_kids} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=":productId" element={<Product/>}/><Route/>
        </Route>

        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
