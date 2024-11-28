import './App.css';
import Notification from './components/Notification/Notification';
import Home from './pages/Home/Home';
import ProductOverview from './pages/ProductOverview/ProductOverview';
import Navbar from './components/Navbar/Navbar';

function App() {
  

  return (
    <>
    <Navbar/>  
    <Home/>
    <ProductOverview/>

    <Notification/>
      
    </>
  );
}

export default App;