import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductOverview from './pages/ProductOverview/ProductOverview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product-overview' element={<ProductOverview />} />
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>   

    </>
  );
}

export default App;
