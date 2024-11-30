import React, { useState } from "react";

const App = () => {
  const [mainImage, setMainImage] = useState("/images/thumb1.jpg"); // Default main image
  const [selectedColor, setSelectedColor] = useState(""); // For tracking the selected color

  // Function to handle thumbnail click to change the main image
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Function to handle color selection
  const handleColorSelect = (colorImage) => {
    setMainImage(colorImage); // Change main image to selected color's image
  };

  return (
    <div className="bg-gray-50">
      {/* Product Details Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 lg:px-8">
          {/* Image Section */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={mainImage} // Dynamically change the image based on the selected thumbnail/color
                alt="Main image"
                className="h-[400px] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex justify-center space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300"
                  onClick={() => handleThumbnailClick(`/images/thumb${item}.jpg`)} // Update image when clicked
                >
                  <img
                    src={`/images/thumb${item}.jpg`} // Thumbnail images
                    alt={`Thumbnail ${item}`}
                    className="h-20 w-20 object-cover cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between">
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800">
                F9 Wireless Earphones Bluetooth TWS Noise Reduction Headphone
              </h1>
              <p className="text-4xl font-semibold text-red-500 mt-2">LKR 2,450.07</p>
              <p className="text-gray-500 line-through text-m">LKR 5,000.00</p>
              <p className="text-green-600 font-medium text-m">Save LKR 2,550.00</p>

              {/* Description */}
              <p className="text-gray-800 mt-6 leading-relaxed">
                5+ pieces, extra 2% off Tax excluded, add at checkout if applicable.
              </p>

              {/* Color Options */}
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Select Color:</h3>
                <div className="flex items-center space-x-4">
                  {/* Example Colors */}
                  {[
                    { name: "White", img: "/images/white.jpg" },
                    { name: "Black", img: "/images/black.jpg" },
                  ].map((color, index) => (
                    <div
                      key={index}
                      className="group border-2 border-gray-300 hover:border-red-500 rounded-lg p-2 cursor-pointer transition-all"
                      onClick={() => handleColorSelect(color.img)} // Change image when color is selected
                    >
                      <img
                        src={color.img}
                        alt={color.name}
                        className="h-16 w-16 object-cover rounded-md"
                      />
                      <p className="text-center text-sm font-medium mt-1 group-hover:text-red-500">
                        {color.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition-all">
                Buy Now
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition-all outline outline-2 outline-gray-800 focus:outline-blue-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Smart Earbuds 2024", price: "LKR 1,999.00", originalPrice: "LKR 3,500.00", discount: "Save LKR 1,501.00", img: "/images/img1.jpg" },
              { name: "Smart Eaurbuds 2023", price: "LKR 1,500.00", originalPrice: "LKR 2,800.00", discount: "Save LKR 1,300.00", img: "/images/img2.jpg" },
              { name: "Smart Watch X", price: "LKR 2,300.00", originalPrice: "LKR 4,000.00", discount: "Save LKR 1,700.00", img: "/images/img3.jpg" },
              { name: "Smart Watch Pro", price: "LKR 3,000.00", originalPrice: "LKR 5,000.00", discount: "Save LKR 2,000.00", img: "/images/img4.jpg" },
              { name: "Smart Watch Sport", price: "LKR 1,700.00", originalPrice: "LKR 3,200.00", discount: "Save LKR 1,500.00", img: "/images/img5.jpg" },
              { name: "Smart Watch Lite", price: "LKR 2,100.00", originalPrice: "LKR 3,700.00", discount: "Save LKR 1,600.00", img: "/images/img6.jpg" },
              { name: "Smart Watch Ultra", price: "LKR 3,500.00", originalPrice: "LKR 6,000.00", discount: "Save LKR 2,500.00", img: "/images/img7.jpg" },
              { name: "Smart Watch Classic", price: "LKR 2,000.00", originalPrice: "LKR 3,500.00", discount: "Save LKR 1,500.00", img: "/images/img8.jpg" },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-4 hover:shadow-lg"
              >
                <img
                  src={product.img} // Dynamically use the image path for each product
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-red-500 font-bold">{product.price}</p>
                <p className="text-gray-400 text-sm line-through">{product.originalPrice}</p>
                <p className="text-green-500 text-sm">{product.discount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {Array(3)
              .fill({
                name: "John Doe",
                rating: 5,
                comment: "Great product! Highly recommend.",
                image: null,
              })
              .map((review, index) => (
                <div key={index} className="p-4 border rounded-md bg-gray-50 flex space-x-4">
                  {/* Replace with a real image */}
                  <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Product Specifications</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Bluetooth version: 5.0</li>
            <li>Battery life: 10 hours</li>
            <li>Charging time: 2 hours</li>
            <li>Weight: 200g</li>
            <li>Compatible with Android and iOS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
