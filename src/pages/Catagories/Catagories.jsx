import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import RelatedItems from '../../components/ProductCards/RelatedItems';
import Notification from '../../components/Notification/Notification';

const ProductCards = () => {
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [sortOption, setSortOption] = useState('');
  const [filters, setFilters] = useState({ stock: true });

  // Add to cart functionality
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setNotificationMessage(`${product.name} added to cart!`);
    setTimeout(() => setNotificationMessage(null), 3000);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 border-r">
  <h3 className="mb-4 text-xl font-bold">Filters</h3>
  <div className="mb-4">
    <h4 className="mb-2 font-medium">Service & Promotion</h4>
    <label className="block">
      <input type="checkbox" className="mr-2" />
      Free Delivery
    </label>
    <label className="block">
      <input type="checkbox" className="mr-2" />
      Gems
    </label>
  </div>
  <div className="flex items-center mb-4">
  <h4 className="mb-2 mr-4 font-medium">Price</h4>
  <input
    type="number"
    placeholder="Min"
    className="w-20 p-1 mr-2 border"
  />
  <input
    type="number"
    placeholder="Max"
    className="w-20 p-1 mr-2 border"
  />
  {/* Filter Button (Arrow) */}
  <button
    className="flex items-center justify-center px-4 py-2 ml-2 text-white bg-gray-800 hover:bg-gray-900"
    onClick={() => alert("Filters applied")}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>



  <div className="mb-6">
    <h4 className="mb-4 text-lg font-semibold text-gray-700">Rating</h4>
    {[5, 4, 3, 2, 1].map((rating) => (
      <div key={rating} className="flex items-center gap-1">
        {[5, 4, 3, 2, 1].map((star, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 cursor-pointer ${
              index < rating
                ? "text-yellow-500 hover:text-yellow-600"
                : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.29a1 1 0 00.95.69h6.615c.969 0 1.371 1.24.588 1.81l-5.357 3.867a1 1 0 00-.364 1.118l2.036 6.29c.3.921-.755 1.688-1.54 1.118l-5.357-3.867a1 1 0 00-1.176 0l-5.357 3.867c-.785.57-1.84-.197-1.54-1.118l2.036-6.29a1 1 0 00-.364-1.118L2.4 11.427c-.783-.57-.381-1.81.588-1.81h6.615a1 1 0 00.95-.69l2.036-6.29z"
            />
          </svg>
        ))}
        <p className="mt-2 text-sm text-gray-600"> and up</p>
      </div>
    ))}
  </div>

  
</aside>


      {/* Main Content */}
      <main className="w-3/4 p-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Headphones</h2>
          <div className="flex items-center">
            <label className="mr-2 font-medium">Sort by:</label>
            <select
              className="p-2 border"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Related Items Component */}
        <RelatedItems
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          sortOption={sortOption}
          filters={filters}
          onAddToCart={addToCart}
        />

        {/* Pagination */}
        <div className="flex items-center justify-center mt-4 space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 border rounded ${index + 1 === currentPage ? 'bg-blue-500 text-white' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>

      {/* Notification */}
      {notificationMessage && (
        <Notification
          message={notificationMessage}
          action="Your Cart Updated."
          onClose={() => setNotificationMessage(null)}
        />
      )}
    </div>
  );
};

export default ProductCards;


