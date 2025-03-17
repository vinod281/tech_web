import React, { useState } from 'react';
import axios from "axios";


export default function AddProduct() {


  const [product, setProduct] = useState(() => ({
    id: 0,
    name: "Enter Product Title",
    imageUrl:
      [""],
    price: null,
    reviews: "0 reviews",
    rating: 5,
    stock: false,
    offer: null,
    
  }));

  const handleStockChange = (e) => {
    const { checked } = e.target;
    setProduct((prev) => ({ ...prev, stock: checked }));

  };

  

  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to an array
    setImages((prevImages) => [...prevImages, ...files]); // Update images state for preview

    // Add new image URLs to the product state
    const newImageUrls = files.map((file) => URL.createObjectURL(file)); // Create temporary URLs
    setProduct((prev) => ({
      ...prev,
      imageUrl: [...prev.imageUrl, ...newImageUrls], // Append new image URLs
    }));

    
  };


  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log('Form Submitted',product);

    // on submit action with API
    const formData = new FormData();
    formData.append('title', product.name);
    formData.append('price', product.price);
    formData.append('offer',product.offer);
    formData.append('stock',product.stock);
    formData.append('rating',product.rating);
    formData.append('category',product.category);
    formData.append('image',product.imageUrl);
    formData.append('review',product.reviews);

    images.forEach((image,index) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post(
        "https://localhost:7173/api/Product/AddProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product uploaded successfully:", response.data);
      
    } catch (error) {
      console.error("Error uploading product:", error);
      
    }
    
    
    //window.location.reload();
  }


  return (


    <>
      <div className='flex flex-wrap justify-evenly'>
        <div>




          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>

            <div className='flex flex-wrap justify-center gap-20'>


              <div>
                <div className='mb-6'>

                  <label htmlFor="title" className="block font-medium text-gray-900 text-sm/6">
                    Product Title
                  </label>


                  <div className="mt-2">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      autoComplete="name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                      placeholder='Enter your product title or name'
                      onChange={(e) => setProduct((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                </div>


                <div className='flex flex-wrap gap-5'>



                  <div>

                    <label htmlFor="category" className="block font-medium text-gray-900 text-sm/6">
                      Category
                    </label>
                    <div className="mt-2">
                      <select
                        id="category"
                        name="category"
                        required
                        className="block h-9 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                      >
                        <option>Select Product Category</option>
                        <option>Headphone</option>
                        <option>Charger</option>
                        <option>Back Cover</option>
                        <option>Cable</option>
                        <option>Power Bank</option>
                      </select>
                    </div>



                  </div>

                  <div>

                    <label htmlFor="subCategory" className="block font-medium text-gray-900 text-sm/6">
                      Sub category
                    </label>
                    <div className="mt-2">
                      <select
                        id="subCategory"
                        name="subCategory"
                        required
                        className="block h-9 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                      >
                        <option>Select Sub Category</option>
                        <option>Headphone</option>
                        <option>Charger</option>
                        <option>Back Cover</option>
                        <option>Cable</option>
                        <option>Power Bank</option>
                      </select>
                    </div>

                  </div>



                </div>




                <div className='mt-6'>

                  <label htmlFor="title" className="block font-medium text-gray-900 text-sm/6">
                    Description
                  </label>


                  <div className="mt-2">
                    <textarea
                      id="title"
                      name="title"
                      type="text"
                      rows={2}
                      required
                      autoComplete="name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                      placeholder='Enter your product description here'

                    />
                  </div>


                </div>

                <div className="mt-2">

                  <label htmlFor="price" className="block font-medium text-gray-900 text-sm/6">
                    Price Rs:
                  </label>


                  <div className="mt-2">
                    <input
                      id="price"
                      name="price"
                      type="number"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                      onChange={(e) => setProduct((prev) => ({ ...prev, price: e.target.value }))}
                      placeholder='Enter your product price'
                    />
                  </div>



                </div>





              </div>


              <div>

                <div className='mb-6'>

                  <label htmlFor="title" className="block font-medium text-gray-900 text-sm/6">
                    Specifications
                  </label>


                  <div className="mt-2">
                    <textarea
                      id="title"
                      name="title"
                      type="text"
                      rows={4}
                      required
                      autoComplete="name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                      placeholder='Enter your product specifications here'

                    />
                  </div>

                </div>

                <div className='mb-6 '>

                  <label htmlFor="title" className="block font-medium text-gray-900 text-sm/6">
                    Images
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*" // Restrict to image files
                    onChange={handleImageChange}
                    className='w-2 font-medium text-gray-900 rounded-md text-sm/6'
                  />

                  {images.length > 0 && (
                    <div className="mt-4">
                      <h3>Preview:</h3>
                      <div className="flex flex-wrap gap-4">
                        {images.map((image, index) => (
                          <div key={index} className="w-24 h-24 overflow-hidden rounded">
                            <img
                              src={URL.createObjectURL(image)} // Create a temporary URL for preview
                              alt={`preview-${index}`}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                <div className='flex flex-wrap gap-5'>

                  <div>

                    <label htmlFor="offer" className="block font-medium text-gray-900 text-sm/6">
                      Offer
                    </label>


                    <div className="mt-2">
                      <input
                        id="offer"
                        name="offer"
                        type="number"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                        onChange={(e) => setProduct((prev) => ({ ...prev, offer: e.target.value }))}
                        placeholder='Enter your discount'
                      />
                    </div>



                  </div>

                  <div>

                    <label htmlFor="tel" className="block font-medium text-gray-900 text-sm/6">
                      Active?
                    </label>


                    <div className="mt-2">


                      <input
                        type="checkbox"
                        checked={product.stock}
                        onChange={handleStockChange}
                      />

                      <label htmlFor="tel" className="ml-2 font-medium text-gray-900 text-sm/6">
                        Set as active
                      </label>



                    </div>

                  </div>





                </div>





                <div className='flex justify-end gap-5 mt-10'>



                  <button
                    type="submit"
                    className="  flex w-1/4 justify-center rounded-md bg-gray-700  hover:bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update
                  </button>

                  <button
                    type="reset"
                    className=" flex w-1/4 justify-center rounded-md bg-gray-700  hover:bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Clear
                  </button>


                </div>


              </div>


            </div>


          </form>



        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between mt-6 mb-6">
            <div className="relative w-64 p-4 transition-transform duration-300 border rounded-lg hover:scale-105">
              <img
                src={product.imageUrl[product.imageUrl.length - 1]}
                alt="product image.."
                className="object-cover w-full h-48 rounded-md"
                onError={(e) => e.target.src = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <div className="flex flex-wrap items-center mt-2">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.89a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.32 2.415a1 1 0 00-.364 1.118l1.262 3.89c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.32 2.415c-.784.57-1.838-.197-1.54-1.118l1.262-3.89a1 1 0 00-.364-1.118L2.718 9.317c-.783-.57-.38-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.262-3.89z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">{product.reviews}</span>
              </div>
              <p className="mt-2 text-lg font-semibold">RS: {product.price}</p>

              {product.stock ? (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-md cursor-pointer bg-green-50 ring-1 ring-inset ring-green-600/20">
                  Product available
                </span>
              ) : (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-700 rounded-md cursor-not-allowed bg-red-50 ring-1 ring-inset ring-red-600/20">
                  Out of stock
                </span>
              )}

              {/* Badge */}
              {product.offer && (
                <div className="absolute px-2 py-1 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full right-12 top-8">
                  {product.offer}% Off
                </div>
              )}
            </div>
          </div>
        </div>


      </div>



    </>
  )
}
