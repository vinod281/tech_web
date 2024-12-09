import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('orders');

    const orders = [
        {
            orderNumber: '7681029',
            shippedDate: '30 March 2019',
            total: '$78.00',
            status: 'Delivered',
            imgSrc: 'https://cdn.sandberg.world/products/images/lg/420-75_lg.jpg',
        },
        {
            orderNumber: '7681030',
            shippedDate: '30 March 2019',
            total: '$60.00',
            status: 'Out for delivery',
            imgSrc: 'https://technoor.me/wp-content/uploads/2024/09/pixel-watch-3.png',
        },
        {
            orderNumber: '7681031',
            shippedDate: '30 March 2019',
            total: '$90.00',
            status: 'Processing',
            imgSrc: 'https://m.media-amazon.com/images/I/619gDUPcbNL.jpg',
        },
        
    ];

    return (

        <>

            <Navbar />
            <div className="min-h-screen p-4 mt-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold">My account</h1>
                        <div className="text-xl">Welcome, John Doe</div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                        <div className="flex space-x-6 border-b-2 border-gray-200">
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'orders' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Orders
                            </button>
                            <button
                                onClick={() => setActiveTab('favorites')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'favorites' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Favorites
                            </button>
                            <button
                                onClick={() => setActiveTab('personalData')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'personalData' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Personal Data
                            </button>
                            <button
                                onClick={() => setActiveTab('addresses')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'addresses' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Addresses
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        {activeTab === 'orders' && (
                            <div>
                                <div className="text-lg font-semibold ">Orders</div>
                                {orders.map((order, index) => (
                                    <div key={index} className="flex justify-between mb-6">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={order.imgSrc}
                                                alt="Product"
                                                className="object-cover w-16 h-16"
                                            />
                                            <div>
                                                <div className="font-semibold">Order number: {order.orderNumber}</div>
                                                <div className="text-sm text-gray-600">Shipped date: {order.shippedDate}</div>
                                                <div className="text-sm text-gray-600">Total: {order.total}</div>
                                                <div className={`text-sm ${order.status === 'Delivered' ? 'text-green-500' : order.status === 'Out for delivery' ? 'text-orange-500' : 'text-red-500'}`}>
                                                    Status: {order.status}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="text-blue-500">
                                            {order.status === 'Delivered' ? 'View Order' : order.status === 'Out for delivery' ? 'Track Order' : 'Cancel Order'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'favorites' && (
                            <div>
                                <div className="mb-6 text-lg font-semibold">Favorites</div>
                                {/* Add Favorite items here */}
                                
                                {orders.map((order, index) => (
                                    <div key={index} className="flex justify-between mb-6">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={order.imgSrc}
                                                alt="Product"
                                                className="object-cover w-16 h-16"
                                            />
                                            <div>
                                                <div className="font-semibold">Order number: {order.orderNumber}</div>
                                                <div className="text-sm text-gray-600">Shipped date: {order.shippedDate}</div>
                                                <div className="text-sm text-gray-600">Total: {order.total}</div>
                                                <div className={`text-sm ${order.status === 'Delivered' ? 'text-green-500' : order.status === 'Out for delivery' ? 'text-orange-500' : 'text-red-500'}`}>
                                                    Status: {order.status}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="text-blue-500">
                                            {order.status === 'Delivered' ? 'View Order' : order.status === 'Out for delivery' ? 'Track Order' : 'Cancel Order'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'personalData' && (
                            <div>
                                <div className="mb-6 text-lg font-semibold">Personal Data</div>
                                {/* Add Personal Data form here */}
                                <div>Your personal data goes here!</div>
                            </div>
                        )}

                        {activeTab === 'addresses' && (
                            <div>
                                <div className="mb-6 text-lg font-semibold">Addresses</div>
                                {/* Add Addresses form here */}
                                <div>Your addresses go here!</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
};

export default MyAccount;