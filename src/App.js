import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductOverview from './pages/ProductOverview/ProductOverview';
import Register from './pages/Register/Register';
import About from './pages/About/About'; 
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

