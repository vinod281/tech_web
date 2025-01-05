import React from 'react'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function AddProduct() {

  const product =
  {
    id: 1,
    name: "Samsung Buds (clone)",
    imageUrl: "https://png.pngtree.com/png-vector/20240513/ourmid/pngtree-sleek-black-charging-case-with-wireless-earbuds-inside-png-image_12456729.png",
    price: "RS 3600.00",
    reviews: "38 reviews",
    rating: 5,
    stock: true,
    offer: "10% Off"
  }


  return (


    <>
      <div className='flex flex-wrap justify-evenly'>
        <div className="flex items-center justify-between mb-6">

        
                    
                
                
             
        </div>
        
        <div className="">

          <div className="relative w-64 p-4 transition-transform duration-300 border rounded-lg hover:scale-105">


            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-48 rounded-md"
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
            <p className="mt-2 text-lg font-semibold">{product.price}</p>

            {/* Badge */}
            {product.offer && (
              <div className="absolute px-2 py-1 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full right-12 top-8 ">
                {product.offer}
              </div>
            )}

          </div>

        </div>
      </div>





    </>
  )
}
