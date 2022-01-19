import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import RoomSlider from '../components/RoomSlider'
import NavBar from '../components/NavBar'
import axios from 'axios'


export default function MainPage () {

    const [featuredProducts, setFeaturedProducts] = useState([])
    const [escapeRooms, setEscapeRooms] = useState([])
    const [mysteryMurders, setMysteryMurders] = useState([])
    const [amazingRaces, setAmazingRaces] = useState([])
    const BASE_URL = "https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/products/active-listings"

    useEffect(() => {
        async function getData() {
            let response = await axios.get(BASE_URL)
            console.log(response.data)
            setFeaturedProducts(response.data)
            setEscapeRooms(response.data)
            setMysteryMurders(response.data)
            setAmazingRaces(response.data)
        }
        getData()
    }, [])

    

    return (
        <React.Fragment>
            <NavBar/>
            <Carousel />
            {/* Featured */}
            <h1>Featured Rooms</h1>
            <RoomSlider data={featuredProducts}/>
            <h1>Escape Rooms</h1>
            <RoomSlider data={escapeRooms}/>
            {/* Mystery Murder */}
            <h1>MysteryMurder</h1>
            <RoomSlider data={mysteryMurders}/>
            {/* Amazing Race */}
            <h1>Amazing Race</h1>
            <RoomSlider data={amazingRaces}/>
            
            
        </React.Fragment>
    )


}