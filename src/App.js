import './App.css';
import Home from './pages/Home/Home';
import ProductOverview from './pages/ProductOverview/ProductOverview';
import Navbar from './components/Navbar/Navbar';
import Payment from './pages/Payment/Payment';
import Footer from './components/Footer/Footer';



function App() {
  

  return (
    <>
    <Navbar/>  
    <Home/>
    <ProductOverview/>

      
    </>
  );
}

export default App;