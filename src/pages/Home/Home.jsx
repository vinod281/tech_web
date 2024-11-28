import React from 'react'
import Carousel from '../../components/Carousel/Carousel';
import Cart from '../../components/Cart/Cart';
import Categories from '../../components/Categories/Categories';
import ProductCards from '../../components/ProductCards/ProductCards';
import Reviews from '../../components/Reviews/Reviews';
import { useState } from 'react';


function Home() {

    

    return (
        <>

            {/* Button to open the Cart */}
            

            
            <Categories />
            <Carousel />
            <ProductCards />
            <Reviews />
            

        </>
    )
}

export default Home