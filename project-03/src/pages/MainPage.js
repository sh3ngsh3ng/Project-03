import React from 'react'
import Carousel from '../components/Carousel'
import FeaturedRooms from '../components/FeaturedRooms'
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
            <FeaturedRooms />
            
        </React.Fragment>
    )


}