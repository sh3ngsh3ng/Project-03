import React from 'react'
import NavBar from '../components/NavBar'
import ProductSection from '../components/ProductSection'

export default function MainPage () {



    return (
        <React.Fragment>
            <NavBar/>
            <div className="container">
                <ProductSection />
            </div>
        </React.Fragment>
    )


}