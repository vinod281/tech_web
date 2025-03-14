import React from 'react'

export default function MyOrders() {
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

    </>
  )
}
