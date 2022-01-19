import React, { Component } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";





export default class RoomSlider extends Component {

    

    render() {

        


        let settings = {
            // infinite: true,
            // speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            swipeToSlide: true,
            // initialSlide: 0,
            // focusOnSelect: true,
            // centerMode: true,
            // adaptiveHeight: true,
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        dots: false,
                        swipeToSlide: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: false,
                        swipeToSlide: true
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        dots: false,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
            ]
        };

        const slides = this.props.data.map((each) => {
            console.log(each)
            return (
                <SliderCard data={each} />
            )
        })

        return (
                <div className="container slider-container">
                    <h2 style={{"position": "absolute"}}>{this.props.title}</h2>
                    <div style={{"min-height": "10px"}}></div>

                    <Slider {...settings}>
                        {slides}
                    </Slider>
                </div>

        )
    }


}