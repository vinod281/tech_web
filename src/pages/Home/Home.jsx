import React from 'react'
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import ProductCards from '../../components/ProductCards/ProductCards';
import Reviews from '../../components/Reviews/Reviews';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


function Home() {



    return (
        <>

            {/* Button to open the Cart */}


            <Navbar />

            <Banner />

            
            <Divider variant="middle" component="li">
                <Chip label="Categories" size="small" />
            </Divider>

            <Categories />
            {/* <Carousel /> */}
            <ProductCards />

            <div className='m-10'>

            <Divider variant="middle" component="li">
                <Chip label="Customer Reviews" size="small" />
            </Divider>

            </div>
            
            

            
            
            <Reviews /><br></br><br></br>
            <Footer />

        </>
    )
}

export default Home