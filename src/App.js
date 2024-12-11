import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductOverview from './pages/ProductOverview/ProductOverview';
import Register from './pages/Register/Register';
import About from './pages/About/About'; 
import ContactUs from './pages/ContactUs/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        <Route path="/contact" element={<ContactUs />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;

