import React from 'react';
import Notification from '../Notification/Notification';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { useEffect } from 'react';




const products1 = [
    {
        id: 1,
        name: "Samsung Buds (clone)",
        imageUrl: "https://png.pngtree.com/png-vector/20240513/ourmid/pngtree-sleek-black-charging-case-with-wireless-earbuds-inside-png-image_12456729.png",
        price: "RS 3600",
        reviews: "38 reviews",
        rating: 5,
        stock: true,
        offer: "10% Off"
    },
    {
        id: 2,
        name: "Remax 20000mah",
        imageUrl: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/8b9cc7c9808a81fc8db0eaf67a4d79d7_4a131036-d78e-48a7-8f01-3ff265a3a07f_1120x--1655727074.jpg",
        price: "RS 2800",
        reviews: "18 reviews",
        rating: 5,
        stock: false,
        offer: "",
    },
    {
        id: 3,
        name: "Hohem Gimbal",
        imageUrl: "https://i0.wp.com/gearz.lk/wp-content/uploads/2024/03/Phone-Gimbal-Stabilizer-iSteady-XE-2023-Version-XE-Black-_-GreyXE-Kit-Black_1.webp",
        price: "RS 8000",
        reviews: "14 reviews",
        rating: 5,
        stock: true,
        offer: "",
    },
    {
        id: 4,
        name: "Beats Headphone",
        imageUrl: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/slate-blue/blue-01-solo4.jpg",
        price: "RS 3200",
        reviews: "21 reviews",
        rating: 4,
        stock: true,
        offer: "20% Off",

    },
    {
        id: 5,
        name: "Smart-Watch-x8",
        imageUrl: "https://gadgetasia.lk/wp-content/uploads/2024/06/sri-lanka-gadget-asia-lk-smart-watch-x8-unique-combination-best-price.png",
        price: "RS 5500",
        reviews: "21 reviews",
        rating: 5,
        stock: true,
        offer: "20% Off",
    },
    {
        id: 6,
        name: "Organize Phone Holder",
        imageUrl: "https://static-01.daraz.lk/p/20188a91cf85429e01ee9172d206ece5.jpg",
        price: "RS 1500",
        reviews: "21 reviews",
        rating: 3,
        stock: true,
        offer: "",
    },
    {
        id: 7,
        name: "Air Pods Pro (clone)",
        imageUrl: "https://static-01.daraz.lk/p/5d09b5da0c238f6e3aeed01be71b6884.jpg",
        price: "RS 3900",
        reviews: "21 reviews",
        rating: 4,
        stock: false,
        offer: "50% Off",
    },
    {
        id: 8,
        name: "Realme Buds T100 Wireless Earbuds",
        imageUrl: "https://www.simplytek.lk/cdn/shop/files/Realme-Buds-T100-Earbuds-SimplyTek-LK-1.png?v=1694426071",
        price: "RS 3900",
        reviews: "21 reviews",
        rating: 4,
        stock: true,
        offer: "20% Off",
    },
];

const ProductCards = () => {

    const [notificationMessage, setNotificationMessage] = useState(null);
    const [products, setProducts] = useState([]);


    // Fetching products from an API
     useEffect(() => {
         fetch("https://localhost:7173/api/ProductImages/ProductsWithImages")
             .then((res) => res.json())
             .then((data) => setProducts(data));
     }, []);

     console.log(products);

    // Function to handle adding a product to the cart
    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;

        } else {
            cart.push({ ...product, quantity: 1 });

        }

        localStorage.setItem('cart', JSON.stringify(cart));
        //alert(`${product.name} added to cart!`);



        setNotificationMessage(`${product.name} added to cart!`);


        setTimeout(() => {
            setNotificationMessage(null);
        }, 3000);

    };




    // Product Card Component
    const ProductCard = ({ product, onAddToCart }) => {
        return (
            <div className="relative p-4 transition-transform duration-300 border rounded-lg hover:scale-105">


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
                <p className="mt-2 text-lg font-semibold">{product.price}.00</p>

                {product.stock ? (
                    <span
                        className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-md cursor-pointer bg-green-50 ring-1 ring-inset ring-green-600/20"
                        onClick={() => onAddToCart(product)}
                    >
                        Add to cart
                    </span>
                ) : (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-700 rounded-md cursor-not-allowed bg-red-50 ring-1 ring-inset ring-red-600/20">
                        Out of stock
                    </span>
                )}


                {/* Badge */}



                {product.offer && (
                    <div className="absolute px-2 py-1 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full right-12 top-8 ">
                        {product.offer}% Off
                    </div>
                )}







            </div>
        );
    };

    return (
        <>

            <Divider variant="middle" component="li">
                <Chip label="Top Rated Products" size="small" />
            </Divider>
            <div className="max-w-screen-xl px-2 py-4 mx-auto sm:px-4 sm:py-8">

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
            </div>


            <Divider variant="middle" component="li">
                <Chip label="Best Selling Products" size="small" />
            </Divider>

            <div className="max-w-screen-xl px-2 py-4 mx-auto sm:px-4 sm:py-8">
                
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
            </div>




            {notificationMessage && (
                <Notification message={notificationMessage} action={"Your Cart Updated."} onClose={() => setNotificationMessage(null)} />
            )}
        </>
    );
};

export default ProductCards;