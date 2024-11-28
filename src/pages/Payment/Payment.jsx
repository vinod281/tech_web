import React from "react";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen py-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left Section */}
          <div className="p-6 bg-white rounded shadow lg:w-2/3">
            {/* Address Section */}
            <div className="mb-6">
              <h2 className="mb-4 text-lg font-semibold">Shipping Address</h2>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  {/* Address Information */}
                  <div>
                    <p className="font-medium text-gray-800">
                      John Doe, 123/5 Main Street, Apartment 4B, Piliyandala, NY, SriLanka
                    </p>
                    
                    <p className="text-sm text-gray-500">
                      Phone: +1 234-567-890
                    </p>
                  </div>
                  {/* Add New Address Button */}
                  <button className="text-blue-500 hover:underline">
                    Add New Address
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h2 className="mb-4 text-lg font-semibold">Payment Methods</h2>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  {/* Card Information */}
                  <div className="flex items-center gap-4">
                    <i className="text-2xl text-gray-800 fas fa-credit-card"></i>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-700">
                        Visa **** 1002
                      </span>
                    </div>
                  </div>
                  {/* Change Button */}
                  <button className="text-blue-500 hover:underline">Change</button>
                </div>
              </div>
            </div>

            {/* Order Review */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">Order Review</h2>
              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/product1.webp"
                    alt="Product"
                    className="object-cover w-20 h-20 rounded-md"
                  />
                  <div>
                    <p className="text-gray-800">
                      XIAOMI AP05 True Wireless Earphone Buds5 HIFI Stereo Sound
                      Bluetooth5.3 Headphone MIJIA Sport Earbuds With Mic For
                      Android iOS
                    </p>
                    <p className="text-sm text-gray-500">
                      Color: White | Ships from: China
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-800">$19.95</p>
                  <div className="flex items-center">
                    <button className="px-2 py-1 border rounded">-</button>
                    <p className="px-3">1</p>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Shipping: $13.56 via TechShop Standard Shipping, Estimated
                delivery on Dec 6.
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-6 bg-white rounded shadow lg:w-1/3">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="coupon" className="block text-sm text-gray-700">
                  Select Coupon
                </label>
                <select id="coupon" className="w-full p-2 mt-1 border rounded">
                  <option value="">Product Coupon</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="promo-code"
                  className="block text-sm text-gray-700"
                >
                  Promo Code
                </label>
                <div className="flex mt-1">
                  <input
                    id="promo-code"
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 p-2 border rounded-l"
                  />
                  <button className="px-4 text-white bg-gray-800 rounded-r">
                    Apply
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>VAT</p>
                <p>$1.71</p>
              </div>
              <div className="flex items-center justify-between text-lg font-semibold">
                <p>Total</p>
                <p>$40.21</p>
              </div>
              <button className="w-full py-2 text-white bg-gray-800 rounded-lg">
                Place Order
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              TechShop keeps your information and payment safe.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;