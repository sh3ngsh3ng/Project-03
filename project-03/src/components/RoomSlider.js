import React, { Component } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";





export default class RoomSlider extends Component {

    

    render() {

        


        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            // focusOnSelect: true,
            // centerMode: true,
            // adaptiveHeight: true,
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        infinite: true,
                        dots: false,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        focusOnSelect: true,
                        centerMode: true,
                        adaptiveHeight: true,
                        variableWidth: true,
                    }
                },
            ]
        };


        return (

                <div className="container slider-container">
                    <Slider {...settings}>
                        {this.props.data.map((each) => {
                            return (
                                // <div className="img-slide-div">
                                //     <img className="img-slide" src={each.image_url}/>
                                // </div>
                                <SliderCard data={each}/>
                            )
                        })}
                    </Slider>
                </div>

        )
    }


}