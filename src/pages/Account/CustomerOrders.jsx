import React from 'react'

export default function CustomerOrders() {


    const orderList = [
        { orderNumber: '12345', items: 'Gimble', orderedDate: '2023-10-01', total: '$100.00', status: 'Shipped' },
        { orderNumber: '12346', items: ['Headphone', 'Airpod', 'Headphone', 'Airpod', 'Headphone', 'Airpod'], orderedDate: '2023-10-02', total: '$150.00', status: 'Processing' },
        { orderNumber: '12347', orderedDate: '2023-10-03', total: '$200.00', status: 'Delivered' },
        { orderNumber: '12348', orderedDate: '2023-10-04', total: '$250.00', status: 'Cancelled' },
    ];

    return (
        <>
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
        </>
    )
}
