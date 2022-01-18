import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import RoomSlider from '../components/RoomSlider'
import NavBar from '../components/NavBar'
import axios from 'axios'
import ProductSection from '../components/ProductSection'


export default function MainPage () {

    const [featuredProducts, setFeaturedProducts] = useState([])
    const BASE_URL = "https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/products/active-listings"

    useEffect(() => {
        async function getData() {
            let response = await axios.get(BASE_URL)
            console.log(response.data)
        }
        getData()
    }, [])

    

    return (
        <React.Fragment>
            <NavBar/>
            <Carousel />
            {/* Featured */}
            <h1>Featured Rooms</h1>
            <RoomSlider />
            <h1>Escape Rooms</h1>
            <RoomSlider />
            {/* Mystery Murder */}
            <h1>MysteryMurder</h1>
            <RoomSlider />
            {/* Amazing Race */}
            <h1>Amazing Race</h1>
            <RoomSlider />
            
            
        </React.Fragment>
    )


}