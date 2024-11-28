import './App.css';
import Notification from './components/Notification/Notification';
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
    
    <Notification/>
    <Payment/>
    <Footer/>
      
    </>
  );
}

export default App;