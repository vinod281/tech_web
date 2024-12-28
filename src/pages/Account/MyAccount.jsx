import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('orders');

    const orderList = [
        { orderNumber: '12345', items: 'Gimble', orderedDate: '2023-10-01', total: '$100.00', status: 'Shipped' },
        { orderNumber: '12346', items: ['Headphone', 'Airpod', 'Headphone', 'Airpod', 'Headphone', 'Airpod'], orderedDate: '2023-10-02', total: '$150.00', status: 'Processing' },
        { orderNumber: '12347', orderedDate: '2023-10-03', total: '$200.00', status: 'Delivered' },
        { orderNumber: '12348', orderedDate: '2023-10-04', total: '$250.00', status: 'Cancelled' },
    ];


    const orders = [
        {
            orderNumber: '7681029',
            orderedDate: '30 March 2019',
            total: '$78.00',
            status: 'Delivered',
            imgSrc: 'https://cdn.sandberg.world/products/images/lg/420-75_lg.jpg',
        },
        {
            orderNumber: '7681030',
            orderedDate: '30 March 2019',
            total: '$60.00',
            status: 'Out for delivery',
            imgSrc: 'https://technoor.me/wp-content/uploads/2024/09/pixel-watch-3.png',
        },
        {
            orderNumber: '7681031',
            orderedDate: '30 March 2019',
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
                                onClick={() => setActiveTab('addresses')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'addresses' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Customer Orders
                            </button>

                            <button
                                onClick={() => setActiveTab('addresses2')}
                                className={`py-2 px-4 font-semibold ${activeTab === 'addresses2' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            >
                                Product Settings
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 bg-white rounded-lg ">
                        {activeTab === 'orders' && (
                            <div>
                                <div className="mb-10 text-lg font-semibold">Orders</div>
                                {orders.map((order, index) => (
                                    <div key={index} className="flex justify-between mb-10">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={order.imgSrc}
                                                alt="Product"
                                                className="object-cover w-16 h-16"
                                            />
                                            <div>
                                                <div className="font-semibold">Order number: {order.orderNumber}</div>
                                                <div className="text-sm text-gray-600">Ordered date: {order.orderedDate}</div>
                                                <div className="text-sm text-gray-600">Total: {order.total}</div>
                                                <span className={`text-sm ${order.status === 'Delivered' ? 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ' : order.status === 'Out for delivery' ? 'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20' : 'inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'}`}>
                                                    Status: {order.status}
                                                </span>

                                            </div>
                                        </div>
                                        <button className="px-3 py-1 text-xs font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 ">
                                            View Order
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
                                <div className="text-lg font-semibold ">Personal Data</div>
                                {/* Add Personal Data form here */}
                                <div>
                                    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                                            <h2 className="mt-2 font-bold tracking-tight text-center text-gray-700 text-2xl/9">
                                                Update Your Account
                                            </h2>
                                        </div>

                                        <div className="mt-12 sm:mx-auto sm:w-full ">
                                            <form action="#" method="POST" className="space-y-6">

                                                <div className='flex flex-wrap justify-center gap-20'>

                                                    <div>

                                                        <div className='flex flex-wrap gap-5'>

                                                            <div>

                                                                <label htmlFor="fname" className="block font-medium text-gray-900 text-sm/6">
                                                                    Frist Name
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="fname"
                                                                        name="fname"
                                                                        type="text"
                                                                        disabled
                                                                        required
                                                                        autoComplete="name"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                                        value={"Duleesha"}
                                                                    />
                                                                </div>



                                                            </div>

                                                            <div>

                                                                <label htmlFor="lname" className="block font-medium text-gray-900 text-sm/6">
                                                                    Last Name
                                                                </label>


                                                                <div className="mt-2">
                                                                    <input
                                                                        id="lname"
                                                                        name="lname"
                                                                        type="text"
                                                                        required
                                                                        autoComplete="name"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                                        disabled
                                                                        value={"Jayangani"}
                                                                    />
                                                                </div>

                                                            </div>








                                                        </div>

                                                        <div className='mt-6'>

                                                            <label htmlFor="uname" className="block font-medium text-gray-900 text-sm/6">
                                                                User Name
                                                            </label>


                                                            <div className="mt-2">
                                                                <input
                                                                    id="uname"
                                                                    name="uname"
                                                                    type="text"
                                                                    required
                                                                    autoComplete="name"
                                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                                    disabled
                                                                    value={"D_Jayangani"}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className='mt-6'>

                                                            <label htmlFor="email" className="block font-medium text-gray-900 text-sm/6">
                                                                Email Address
                                                            </label>


                                                            <div className="mt-2">
                                                                <input
                                                                    id="email"
                                                                    name="email"
                                                                    type="email"
                                                                    required
                                                                    autoComplete="email"
                                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                                />
                                                            </div>

                                                        </div>





                                                    </div>


                                                    <div>

                                                        <div className='flex flex-wrap gap-5'>

                                                            <div>

                                                                <label htmlFor="postal" className="block font-medium text-gray-900 text-sm/6">
                                                                    Postal Code
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="postal"
                                                                        name="postal"
                                                                        type="text"
                                                                        required
                                                                        autoComplete="postal"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                                    />
                                                                </div>



                                                            </div>

                                                            <div>

                                                                <label htmlFor="tel" className="block font-medium text-gray-900 text-sm/6">
                                                                    Telephone
                                                                </label>


                                                                <div className="mt-2">
                                                                    <input
                                                                        id="tel"
                                                                        name="tel"
                                                                        type="text"
                                                                        required
                                                                        autoComplete="tel"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                                    />
                                                                </div>

                                                            </div>



                                                        </div>

                                                        <div className='mt-6'>

                                                            <label htmlFor="district" className="block font-medium text-gray-900 text-sm/6">
                                                                District
                                                            </label>


                                                            <div className="mt-2">
                                                                <input
                                                                    id="district"
                                                                    name="district"
                                                                    type="district"
                                                                    required
                                                                    autoComplete="district"
                                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className='mt-6'>

                                                            <label htmlFor="address" className="block font-medium text-gray-900 text-sm/6">
                                                                Address
                                                            </label>


                                                            <div className="mt-2">
                                                                <input
                                                                    id="address"
                                                                    name="address"
                                                                    type="text"
                                                                    required
                                                                    autoComplete="address"
                                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                                />
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
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'addresses' && (
                            <div>
                                <div className="mb-6 text-lg font-semibold">Customer Orders</div>
                                {/* Add Addresses form here */}
                                {/* table to show the orders */}
                                <div>






                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                >
                                                    Order Number
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                >
                                                    Ordered Items
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                >
                                                    Ordered Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                >
                                                    Total
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {orderList.map((order) => (
                                                <tr key={order.orderNumber}>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{order.orderNumber}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                        {Array.isArray(order.items) ? (
                                                            order.items.map((item, index) => (
                                                                <div key={index}>{item}</div>
                                                            ))
                                                        ) : (
                                                            <div>{order.items}</div>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{order.orderedDate}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{order.total}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{order.status}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">

                                                        <div className='flex gap-5'>

                                                            <select>
                                                                <option value="view">Ordered</option>
                                                                <option value="track">Processing</option>
                                                                <option value="cancel">Delivered</option>
                                                            </select>

                                                            <button className="px-3 py-1 text-xs font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 ">
                                                                Save changes
                                                            </button>

                                                        </div>

                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>


                                    </table>




                                </div>
                            </div>
                        )}

                        {activeTab === 'addresses2' && (
                            <div>
                                <div className="mb-6 text-lg font-semibold">Product Settings</div>
                                {/* Add Addresses form here */}
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