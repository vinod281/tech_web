import './App.css';
import Home from './pages/Home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';




function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>

    
    
      
    </>
  );
}

export default App;