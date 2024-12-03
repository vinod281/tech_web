import React from 'react'
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import ProductCards from '../../components/ProductCards/ProductCards';
import Reviews from '../../components/Reviews/Reviews';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';


function Home() {



    return (
        <>

            {/* Button to open the Cart */}


            <Navbar />

            <Banner/>

            
            <Categories />
            {/* <Carousel /> */}
            <ProductCards />
            <Reviews /><br></br><br></br>
            <Footer />

        </>
    )
}

export default Home