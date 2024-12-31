import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CustomerOrders from './CustomerOrders';
import PersonalData from './PersonalData';
import MyOrders from './MyOrders';
import AddProduct from './AddProduct';

const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('orders');

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
                                className={`py-2 px-4 font-semibold  ${activeTab === 'orders' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                My Orders
                            </button>

                            <button
                                onClick={() => setActiveTab('personalData')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'personalData' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Personal Data
                            </button>
                            <button
                                onClick={() => setActiveTab('custOrder')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'custOrder' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Customer Orders
                            </button>

                            <button
                                onClick={() => setActiveTab('addProduct')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'addProduct' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Add Product
                            </button>
                            
                            <button
                                onClick={() => setActiveTab('updateProduct')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'updateProduct' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Update Product
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 bg-white rounded-lg ">
                        {activeTab === 'orders' && (
                            <div>
                                <MyOrders />
                            </div>
                        )}


                        {activeTab === 'personalData' && (
                            <div>
                                <div className="text-lg font-semibold ">Personal Data</div>
                                <PersonalData />
                            </div>
                        )}

                        {activeTab === 'custOrder' && (
                            <div>
                                <div className="mb-6 text-lg font-semibold">Customer Orders</div>
                                <CustomerOrders />

                            </div>
                        )}

                        {activeTab === 'addProduct' && (
                            <div>
                                <div className="mb-6 text-lg font-semibold">Add Product</div>
                                <AddProduct />
                            </div>
                        )}

                        {activeTab === 'updateProduct' && (
                            <div>
                                <div className="mb-6 text-lg font-semibold">Update Product</div>
                                <div>Your addresses go here! new 1</div>
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