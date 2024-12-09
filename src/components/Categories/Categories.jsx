import React from 'react'



function Categories() {


    const categories = [
        {
            id: 1,
            image: "https://cdn.sandberg.world/products/images/lg/420-75_lg.jpg",
            title: "POWER BANKS",
            products: "9 products",
        },
        {
            id: 2,
            image: "https://appleme.lk/wp-content/uploads/2024/09/Ugreen-60554-3-Port-USB-3.0-Gigabit-Ethernet-Adapter-by-APPLEME.lk-in-Sri-Lanka-01.jpg",
            title: "HUBS & ADAPTERS",
            products: "7 products",
        },
        {
            id: 3,
            image: "https://otc.lk/wp-content/uploads/2022/04/Coblue-Light-Transparent-Back-Cover-for-iPhone-12-Series.jpg",
            title: "MOBILE ACCESSORIES",
            products: "29 products",
        },
        {
            id: 4,
            image: "https://technoor.me/wp-content/uploads/2024/09/pixel-watch-3.png",
            title: "SMART WATCHES",
            products: "8 products",
        },
        {
            id: 5,
            image: "https://m.media-amazon.com/images/I/619gDUPcbNL.jpg",
            title: "HEADPHONES & EARBUDS",
            products: "8 products",
        },
        {
            id: 6,
            image: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/apple--1607949659.jpg", 
            title: "CHARGERS & CABLES",
            products: "17 products",
        },
    ];

    return (
        <>

            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center space-y-2 text-center"
                        >
                            <div className="flex flex-col items-center space-y-2 text-center transition-transform duration-300 hover:scale-105">
                                <div className="flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-100 rounded-full sm:w-28 sm:h-28 ">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-sm font-semibold sm:text-base">
                                    {category.title}
                                </h3>
                                <p className="text-xs text-gray-500 sm:text-sm">
                                    {category.products}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Categories