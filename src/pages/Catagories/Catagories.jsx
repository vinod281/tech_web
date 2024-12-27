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
        <h3 className="text-xl font-bold mb-4">Filters</h3>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Service & Promotion</h4>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            Free Delivery
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            Gems
          </label>
        </div>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Price</h4>
          <input
            type="number"
            placeholder="Min"
            className="border p-1 w-20 mr-2"
          />
          <input
            type="number"
            placeholder="Max"
            className="border p-1 w-20"
          />
        </div>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Rating</h4>
          <p className="text-sm">4 and up</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Category</h2>
          <div className="flex items-center">
            <label className="mr-2 font-medium">Sort by:</label>
            <select
              className="border p-2"
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


