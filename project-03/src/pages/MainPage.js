import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import RoomSlider from '../components/RoomSlider'
import NavBar from '../components/NavBar'
import axios from 'axios'
import LoadAnimation from '../components/LoadAnimation'
import LoadData from '../components/LoadData'

export default function MainPage (props) {

    const [featuredProducts, setFeaturedProducts] = useState([])
    const [escapeRooms, setEscapeRooms] = useState([])
    const [mysteryMurders, setMysteryMurders] = useState([])
    const [amazingRaces, setAmazingRaces] = useState([])
    const BASE_URL = "https://project-03-virtual-rooms.herokuapp.com/api/products/active-listings"
    const [dataLoaded, setDataLoaded] = useState(false)
    const [spinner, setSpinner] = useState(true)

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
            
            setTimeout(function() {
                setDataLoaded(true)
            }, 2000)
        }
        getData()
    }, [])

    const renderContent = () => {
        if (!dataLoaded) {
            return <LoadData/>
        } else if (dataLoaded && spinner) {

            setTimeout(function() {
                setSpinner(false)
            }, 3000)

            return <LoadAnimation/>
        } else {
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
    }

    // render content v2
    const renderContentV2 = () => {
        if (!dataLoaded) {
            return <LoadAnimation />
        } else {
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

    }


    
    return (
        <React.Fragment>
            {renderContentV2()}
            
        </React.Fragment>
    )


}