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
            let response1 = await axios.get(BASE_URL, {
                params: {
                    room: "escape_room"
                }
            })
            setEscapeRooms(response1.data)

            let response2 = await axios.get(BASE_URL, {
                params: {
                    room: "mystery_murder"
                }
            })
            setMysteryMurders(response2.data)

            let response3 = await axios.get(BASE_URL, {
                params: {
                    room: "amazing_race"
                }
            })
            setAmazingRaces(response3.data)

            let response4 = await axios.get(BASE_URL)
            setFeaturedProducts(response4.data)
            
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