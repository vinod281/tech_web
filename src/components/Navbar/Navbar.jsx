import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import './navbar.css'




export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartKey, setCartKey] = useState(0);

  const handleOpenCart = () => {
    setCartKey((prevKey) => prevKey + 1);
    setCartOpen(true);
  };

  const handleDropdownToggle = (category) => {
    setActiveDropdown((prev) => (prev === category ? null : category));
  };

  const categories = [
    { name: 'Electronics', subItems: ['Phones', 'Laptops', 'Cameras'] },
    { name: 'Headphones', subItems: ['Bluetooth', 'Wired', 'Noise Cancelling'] },
    { name: 'Chargers', subItems: ['Fast Chargers', 'Wireless', 'Car Chargers'] },
    { name: 'Accessories', subItems: ['Cables', 'Adapters', 'Power Banks'] },
    { name: 'Gaming', subItems: ['Consoles', 'Controllers', 'VR Headsets'] },
    { name: 'Wearables', subItems: ['Smartwatches', 'Fitness Bands', 'Smart Glasses'] },
    { name: 'Speakers', subItems: ['Portable', 'Home Theater', 'Waterproof'] },
    { name: 'Storage', subItems: ['USB Drives', 'Hard Drives', 'Memory Cards'] },
  ];

  const navigate = useNavigate(); // Initialize navigate

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleHomeClick = () => {
    navigate('/home'); // Navigate to the login page
  };

  const handleAccountClick = () => {
    navigate('/account'); // Navigate to the login page
  };



  return (
    <div>
      {/* Top Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-800">
        <div className="font-medium text-white">
          365 day returns AND free shipping On Orders over $100 for sonic club members
        </div>
        <div className="space-x-6">
          <a href="/" className="text-white hover:text-gray-400">Home</a>
          <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
          <a href="/about" className="text-white hover:text-gray-400">About</a>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="p-5 bg-white shadow-lg">
        <div className="container flex items-center justify-between mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={handleHomeClick}>TechStore</div>

          {/* Search Bar */}
          <div className="flex items-center w-full max-w-3xl space-x-2">
            <div className="relative flex items-center w-full">
              <FaSearch className="absolute text-gray-600 left-3" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pl-10 text-gray-800 rounded-full outline outline-2 outline-gray-300 focus:outline-gray-800 "
              />
            </div>
          </div>

          {/* Cart, User Icon, and Login Button */}
          <div className="flex items-center ml-4 space-x-4">
            <div>

              <button onClick={handleOpenCart} className="text-gray-600">
                <ShoppingCartOutlinedIcon />
              </button>
            </div>
            {cartOpen && <Cart key={cartKey} open={cartOpen} setOpen={setCartOpen} />}

            <button className="text-gray-600" onClick={handleAccountClick} >
              <i className="fa-regular fa-user"></i>
            </button>
            <button className="px-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-800" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>

        {/* Categories with Dropdowns */}
        <div className="relative flex items-center justify-center mt-4 space-x-10 overflow-x-auto overflow-y-hidden scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group"
              onClick={() => handleDropdownToggle(category.name)}
            >
              {/* Category Link */}
              <a
                href={`#${category.name.toLowerCase()}`}
                className="flex items-center text-gray-700 cursor-pointer hover:text-gray-900"
              >
                {category.name}
                <i className="ml-2 text-sm fa-solid fa-chevron-down"></i>
              </a>

              {/* Dropdown Menu */}
              {activeDropdown === category.name && (
                <div
                  className="absolute left-0 z-50 w-48 mt-2 bg-white rounded-md shadow-md top-full"
                  onClick={(e) => e.stopPropagation()} // Prevent click from closing the dropdown
                >
                  {category.subItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
