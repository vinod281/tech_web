import React from "react";

const App = () => {
  return (
    <div className="bg-gray-50">
      {/* Product Details Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {/* Image Section */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <img
              src="/images/main-watch.jpg" // Replace with your image path
              alt="Main Watch"
              className="h-96 w-full object-cover rounded-md"
            />
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`/images/thumb${item}.jpg`} // Replace with your image path
                  alt={`Thumbnail ${item}`}
                  className="h-20 w-20 object-cover rounded-md"
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-2xl font-bold">Waterproof Smart Watch</h1>
            <p className="text-gray-600 text-sm mt-2">LKR 2,450.07</p>
            <p className="text-gray-400 line-through">LKR 5,000.00</p>
            <p className="text-red-500">Save LKR 2,550.00</p>

            <div className="mt-4">
              <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                Buy Now
              </button>
              <button className="ml-4 bg-yellow-500 text-white px-6 py-2 rounded-md">
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
            {Array(8)
              .fill({
                name: "Smart Watch 2024",
                price: "LKR 1,999.00",
                originalPrice: "LKR 3,500.00",
                discount: "Save LKR 1,501.00",
              })
              .map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-md p-4 hover:shadow-lg"
                >
                  <img
                    src="/images/related-watch.jpg" // Replace with your image path
                    alt={product.name}
                    className="h-40 w-full object-cover rounded-md mb-2"
                  />
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-red-500 font-bold">{product.price}</p>
                  <p className="text-gray-400 text-sm line-through">
                    {product.originalPrice}
                  </p>
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
                <div
                  key={index}
                  className="p-4 border rounded-md bg-gray-50 flex space-x-4"
                >
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
          <h2 className="text-lg font-semibold mb-4">Specifications</h2>
          <table className="table-auto w-full text-sm bg-white rounded-md">
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4 font-semibold">Battery Life</td>
                <td className="py-2 px-4">Up to 7 Days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-semibold">Compatibility</td>
                <td className="py-2 px-4">iPhone & Android</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Waterproof</td>
                <td className="py-2 px-4">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Description</h2>
          <div className="bg-gray-200 h-64 rounded-md"></div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">People Also Searched:</p>
          <div className="flex flex-wrap justify-center space-x-2 mt-2">
            {["smartwatch", "fitness tracker", "wearable tech"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
