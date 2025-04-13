import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RelatedItems from "../../components/ProductCards/RelatedItems";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import axios from "axios";
import parse from "html-react-parser";



const ProductView = (product_ID) => {


  const [mainImage, setMainImage] = useState(null); // Default main image
  const [product, setProduct] = useState([]);
  const [productImages, setProductImages] = useState([]);



  useEffect(() => {
    if (!product_ID) return;

    axios.get(`https://localhost:7173/api/Product/${product_ID.product_ID}`)
      .then((response) => {
        setProduct(response.data);

      })
      .catch((error) => {
        console.error("Error fetching product:", error);

      });

    axios.get(`https://localhost:7173/api/ProductImages/${product_ID.product_ID}`)
      .then((response) => {
        setProductImages(response.data);
        console.log(response.data);
        setMainImage(response.data[0]?.imageName); // Set the first image as the main image

      })
      .catch((error) => {
        console.error("Error fetching product:", error);


      });
  }, []);


  console.log(productImages[0]?.imageName);

  // Function to handle thumbnail click to change the main image
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Function to handle color selection
  const handleColorSelect = (colorImage) => {
    setMainImage(colorImage); // Change main image to selected color's image
  };



  return (

    <>
      <Navbar />

      <div>
        {/* Product Details Section */}
        <div className="py-12">
          <div className="container grid grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-2 lg:px-8">
            {/* Image Section */}
            <div className="flex space-x-6">
              {/* Thumbnail Images */}
              <div className="flex flex-col space-y-4">
                {productImages.map((item, index) => (
                  <div
                    key={index} // Use the index as a fallback if no unique property is available
                    className="overflow-hidden transition-all duration-300 border-2 border-gray-200 rounded-lg hover:border-red-500"
                    onClick={() => handleThumbnailClick(item.imageName)} // Update image when clicked
                  >
                    <img
                      src={item.imageName || "https://via.placeholder.com/150"} // Use the image URL or a placeholder
                      alt={`Thumbnail ${index}`}
                      className="object-cover w-20 h-20 cursor-pointer lg:w-15 lg:h-15"
                    />
                  </div>
                ))}
              </div>

              {/* Main Product Image */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={mainImage} // Dynamically change the image based on the selected thumbnail/color
                  alt="Main image"
                  className="h-[600] w-[full]   object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-between">
              {/* Product Info */}
              <div>
                <h1 className="text-2xl font-extrabold text-gray-800">
                  {product.title}
                </h1>
                <p className="mt-2 text-2xl font-semibold text-red-500">LKR {product.price-(product.price * product.offer / 100)}.00</p>
                <p className="text-gray-500 line-through text-m">LKR {product.price}.00</p>
                <p className="font-medium text-green-600 text-m">Save LKR {product.price * product.offer / 100}</p>

                {/* Description */}
                <p className="mt-2 leading-relaxed text-gray-800">
                  {product.description}
                </p>

                {/* Color Options */}
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-bold">Select Color:</h3>
                  <div className="flex items-center space-x-4">
                    {/* Example Colors */}
                    {[
                      { name: "White", img: "https://image.made-in-china.com/2f0j00BdzqtFRCSMbJ/2024-New-Tws-F9-Gamin-Earphones-in-Ear-Headphones-HiFi-Game-Wireless-Earbuds-Noise-Cancelling-Tws-Earphones-Headphones.jpg" },
                      { name: "Black", img: "https://image.made-in-china.com/2f0j00kApVwBMhkWzi/Tws-F9-5-Wireless-Earbud-Stereo-Noise-Reduction-Headphone-Touch-Control-Earphone-Power-Bank-Headset-Support-All-Phone-F9-Earbuds.webp" },

                    ].map((color, index) => (
                      <div
                        key={index}
                        className="p-2 transition-all border-2 border-gray-300 rounded-lg cursor-pointer group hover:border-red-500"
                        onClick={() => handleColorSelect(color.img)} // Change image when color is selected
                      >
                        <img
                          src={color.img}
                          alt={color.name}
                          className="object-cover w-20 h-20 rounded-md"
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
                <a
                  href="#"
                  className="inline-block px-8 py-3 font-medium text-center text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700"
                >
                  Checkout
                </a>
                <a
                  href="#"
                  className="inline-block px-8 py-3 font-medium text-center text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>








        {/* Specifications Section */}

        <Divider variant="middle" component="li">
          <Chip label="Product Specifications" size="small" />
        </Divider>

        <div className="py-8">
          <div className="container px-4 mx-auto">

            {/* // Product Specifications from database */}

            <div className="prose max-w-none">
              {parse(typeof product.specifications === "string" ? product.specifications : "")}
            </div>
            
          </div>
        </div>

        {/* Customer Reviews Section */}

        <Divider variant="middle" component="li">
          <Chip label="Customer Reviews" size="small" />
        </Divider>

        <div className="py-8 bg-white">
          <div className="container px-4 mx-auto">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
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
                name: "John Doe",
                rating: 5, // 4 full stars + 1 half-star
                comment: "Great product! Highly recommend.These earbuds are amazing! The sound quality is crystal clear, and the bass is deep and rich. I also love the noise cancellation feature – it helps me focus while I work. Comfortable fit and long battery life make them perfect for daily use. Highly recommend!",
                image: "https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
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





        {/* Related Items Section */}
        <RelatedItems />








      </div>

      <Footer />
    </>
  );
};

export default ProductView;

