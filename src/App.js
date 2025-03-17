import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductOverview from './pages/ProductOverview/ProductOverview';
import Register from './pages/Register/Register';
import Catagories from './pages/Catagories/Catagories';
import About from './pages/About/About'; 

import Payment from './pages/Payment/Payment'

import ContactUs from './pages/ContactUs/ContactUs';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './pages/Account/MyAccount';
import AddPTest from './pages/Account/AddPTest';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-overview" element={<ProductOverview />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment/>} /> 
        <Route path='/account' element={<Account/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/catagories" element={<Catagories />} /> 
        <Route path='/test' element={<AddPTest/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

