import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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
      <div className="py-12 bg-gray-50">
        <div className="container grid grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-2 lg:px-8">
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
                  className="overflow-hidden transition-all duration-300 border-2 border-gray-200 rounded-lg hover:border-red-500"
                  onClick={() => handleThumbnailClick(`/images/thumb${item}.jpg`)} // Update image when clicked
                >
                  <img
                    src={`/images/thumb${item}.jpg`} // Thumbnail images
                    alt={`Thumbnail ${item}`}
                    className="object-cover w-20 h-20 cursor-pointer"
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
              <p className="mt-2 text-4xl font-semibold text-red-500">LKR 2,450.07</p>
              <p className="text-gray-500 line-through text-m">LKR 5,000.00</p>
              <p className="font-medium text-green-600 text-m">Save LKR 2,550.00</p>

              {/* Description */}
              <p className="mt-6 leading-relaxed text-gray-800">
                5+ pieces, extra 2% off Tax excluded, add at checkout if applicable.
              </p>

              {/* Color Options */}
              <div className="mt-6">
                <h3 className="mb-2 text-lg font-bold">Select Color:</h3>
                <div className="flex items-center space-x-4">
                  {/* Example Colors */}
                  {[
                    { name: "White", img: "/images/white.jpg" },
                    { name: "Black", img: "/images/black.jpg" },
                  ].map((color, index) => (
                    <div
                      key={index}
                      className="p-2 transition-all border-2 border-gray-300 rounded-lg cursor-pointer group hover:border-red-500"
                      onClick={() => handleColorSelect(color.img)} // Change image when color is selected
                    >
                      <img
                        src={color.img}
                        alt={color.name}
                        className="object-cover w-16 h-16 rounded-md"
                      />
                      <p className="mt-1 text-sm font-medium text-center group-hover:text-red-500">
                        {color.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center mt-8 space-x-4">
              <button className="px-6 py-3 text-lg font-semibold text-white transition-all bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                Buy Now
              </button>
              <button className="px-6 py-3 text-lg font-semibold text-gray-800 transition-all bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 outline outline-2 outline-gray-800 focus:outline-blue-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

     {/* Related Items Section */}
<div className="py-8 bg-gray-100">
  <div className="container px-4 mx-auto">
    <h2 className="mb-4 text-lg font-semibold">Related Items</h2>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {[
        { name: "Smart Earbuds 2024", price: "LKR 1,999.00", originalPrice: "LKR 3,500.00", discount: "Save LKR 1,501.00", img: "/images/P2.webp" },
        { name: "Smart Eaurbuds 2023", price: "LKR 1,500.00", originalPrice: "LKR 2,800.00", discount: "Save LKR 1,300.00", img: "/images/img2.jpg" },
        { name: "Smart Watch X", price: "LKR 2,300.00", originalPrice: "LKR 4,000.00", discount: "Save LKR 1,700.00", img: "/images/img3.jpg" },
        { name: "Smart Watch Pro", price: "LKR 3,000.00", originalPrice: "LKR 5,000.00", discount: "Save LKR 2,000.00", img: "/images/img4.jpg" },
        { name: "Smart Watch Sport", price: "LKR 1,700.00", originalPrice: "LKR 3,200.00", discount: "Save LKR 1,500.00", img: "/images/img5.jpg" },
        { name: "Smart Watch Lite", price: "LKR 2,100.00", originalPrice: "LKR 3,700.00", discount: "Save LKR 1,600.00", img: "/images/img6.jpg" },
        { name: "Smart Watch Ultra", price: "LKR 3,500.00", originalPrice: "LKR 6,000.00", discount: "Save LKR 2,500.00", img: "/images/img7.jpg" },
        { name: "Smart Watch Classic", price: "LKR 2,000.00", originalPrice: "LKR 3,500.00", discount: "Save LKR 1,500.00", img: "/images/img8.jpg" },
      ].map((product, index) => (
        <div key={index} className="p-4 bg-white rounded-md shadow-md hover:shadow-lg">
          {/* Wrap the image in an anchor tag to make it clickable */}
          <a href={`/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`} className="block">
            <img
              src={product.img} // Dynamically use the image path for each product
              alt={product.name}
              className="object-cover w-full h-40 mb-2 rounded-md"
            />
          </a>
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="font-bold text-red-500">{product.price}</p>
          <p className="text-sm text-gray-400 line-through">{product.originalPrice}</p>
          <p className="text-sm text-green-500">{product.discount}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      

{/* Customer Reviews Section */}
<div className="py-8 bg-white">
  <div className="container px-4 mx-auto">
    <h2 className="mb-6 text-xl font-semibold text-gray-800">Customer Reviews</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {[{
        name: "John Doe",
        rating: 5, // 4 full stars + 1 half-star
        comment: "Great product! Highly recommend.These earbuds are amazing! The sound quality is crystal clear, and the bass is deep and rich. I also love the noise cancellation feature – it helps me focus while I work. Comfortable fit and long battery life make them perfect for daily use. Highly recommend!",
        image: "https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", 
      },
      {
        name: "Jane Smith",
        rating: 5, // 5 full stars
        comment: "Absolutely love it!Great earbuds for the price! The connection is stable, and they are very comfortable even after wearing them for hours. The sound quality is good, although it could be a bit louder at maximum volume. Overall, a solid choice for casual listening.",
        image: "https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      },
      
      {
        name: "Emily Johnson",
        rating: 4.5, // 4 full stars
        comment: "I’ve tried many earbuds, but these are by far the best. The audio quality is fantastic, especially for music and podcasts. The Bluetooth range is excellent, and the touch controls are super convenient. I also love the sleek design. Definitely worth the investment.",
        image: "https://as1.ftcdn.net/v2/jpg/02/43/76/54/1000_F_243765470_a0hN5zuTKIonTbRGldi8KajuvhSiWvDx.jpg", 
      }].map((review, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 space-y-4 transition-shadow duration-300 ease-in-out border rounded-lg shadow-md bg-gray-50 hover:shadow-xl"
        >
          {/* Reviewer's Image */}
          <div className="w-20 h-20 overflow-hidden bg-gray-200 rounded-full">
            <img
              src={review.image || "https://via.placeholder.com/150"} // Fall back to placeholder if no image is provided
              alt={review.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
            <div className="flex justify-center text-yellow-500">
              {/* Render Full Stars */}
              {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                <FaStar key={i} className="text-xl" />
              ))}
              {/* Render Half-Star if needed */}
              {review.rating % 1 !== 0 && <FaStarHalfAlt className="text-xl" />}
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>






      {/* Specifications Section */}
      <div className="py-8 bg-gray-100">
  <div className="container px-4 mx-auto">
    <h2 className="mb-4 text-lg font-semibold text-gray-800">Product Specifications</h2>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <ul className="space-y-3 text-gray-600">
        <li className="flex flex-col items-start sm:flex-row sm:items-center">
          <span className="w-full font-medium text-gray-800 sm:w-32">Bluetooth version:</span>
          <span className="text-gray-600">
            Bluetooth 5.0 offers improved range, speed, and stability, making it perfect for uninterrupted wireless listening.
          </span>
        </li>
        <li className="flex flex-col items-start sm:flex-row sm:items-center">
          <span className="w-full font-medium text-gray-800 sm:w-32">Battery life:</span>
          <span className="text-gray-600">
            Enjoy up to 10 hours of continuous music playback or talk time, ensuring you stay connected all day.
          </span>
        </li>
        <li className="flex flex-col items-start sm:flex-row sm:items-center">
          <span className="w-full font-medium text-gray-800 sm:w-32">Charging time:</span>
          <span className="text-gray-600">
            Fully charge your earbuds in just 2 hours, so you can get back to listening to your favorite music quickly.
          </span>
        </li>
        <li className="flex flex-col items-start sm:flex-row sm:items-center">
          <span className="w-full font-medium text-gray-800 sm:w-32">Weight:</span>
          <span className="text-gray-600">
            The earbuds weigh only 200g, making them lightweight and comfortable for extended use without fatigue.
          </span>
        </li>
        <li className="flex flex-col items-start sm:flex-row sm:items-center">
          <span className="w-full font-medium text-gray-800 sm:w-32">Compatibility:</span>
          <span className="text-gray-600">
            These earbuds are fully compatible with both Android and iOS devices, allowing you to seamlessly connect to smartphones, tablets, and laptops.
          </span>
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
};

export default App;

