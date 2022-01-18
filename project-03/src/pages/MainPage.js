import React from 'react'
import Carousel from '../components/Carousel'
import RoomSlider from '../components/RoomSlider'
import NavBar from '../components/NavBar'


export default function MainPage () {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        fade: true,
    };

    return (
        <React.Fragment>
            <NavBar/>
            <Carousel />
            {/* Featured */}
            <h1>Featured Rooms</h1>
            <RoomSlider />
            {/* Escape Rooms */}
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