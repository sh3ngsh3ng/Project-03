import React from 'react'
import Carousel from '../components/Carousel'
import NavBar from '../components/NavBar'
import ProductSection from '../components/ProductSection'

export default function MainPage () {



    return (
        <React.Fragment>
            <NavBar/>
            <Carousel />
            <div className="container">
                <ProductSection />
            </div>
        </React.Fragment>
    )


}