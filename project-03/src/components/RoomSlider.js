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
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            focusOnSelect: true,
            centerMode: true,
            adaptiveHeight: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        infinite: true,
                        slidesToShow: 8,
                        slidesToScroll: 1,
                        dots: false
                    }
                },

                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        dots: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        focusOnSelect: true,
                        centerMode: true,
                        adaptiveHeight: true,
                        variableWidth: true,
                    }
                },
            ]
        };

        const slides = this.props.data.map((each) => {
            return (
                <SliderCard data={each} />
            )
        })
        const {element} = this.props
        // https://stackoverflow.com/questions/56438595/react-slick-slider-items-are-miss-ordered-first-item-is-rendered-as-last-items

        return (
                // element != null && element.length > 0 &&
                <div className="container slider-container">
                    <Slider {...settings}>
                        {/* {this.props.data.map((each) => {
                            return (
                                <SliderCard data={each}/>
                            )
                        })} */}
                        {slides}
                    </Slider>
                </div>

        )
    }


}