import React from 'react'
import Carousel from '../../components/Carousel/Carousel';
import Cart from '../../components/Cart/Cart';
import Categories from '../../components/Categories/Categories';
import ProductCards from '../../components/ProductCards/ProductCards';
import Reviews from '../../components/Reviews/Reviews';
import { useState } from 'react';


function Home() {

    const [cartOpen, setCartOpen] = useState(false);
    const [cartKey, setCartKey] = useState(0); 

    const handleOpenCart = () => {
        setCartKey((prevKey) => prevKey + 1); 
        setCartOpen(true); 
    };

    return (
        <>

            {/* Button to open the Cart */}
            <div>
                <button
                    onClick={handleOpenCart}
                    className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                    Open Cart
                </button>

                {/* Cart Component */}
                {cartOpen && <Cart key={cartKey} open={cartOpen} setOpen={setCartOpen} />}
            </div>

            
            <Categories />
            <Carousel />
            <ProductCards />
            <Reviews />
            <Reviews />

        </>
    )
}

export default Home