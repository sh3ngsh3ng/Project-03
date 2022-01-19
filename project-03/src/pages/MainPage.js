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
            console.log("data caleed =>", response.data)
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

            <RoomSlider data={featuredProducts} title={"Featured Rooms"}/>

            <RoomSlider data={escapeRooms} title={"Escape Rooms"}/>

            <RoomSlider data={mysteryMurders} title={"Mystery Murders"}/>

            <RoomSlider data={amazingRaces} title={"Amazing Races"}/>
            
            
        </React.Fragment>
    )


}