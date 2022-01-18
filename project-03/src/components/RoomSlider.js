import React, { Component } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class RoomSlider extends Component {


    render() {
        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
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
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
            ]
        };




        return (
            <React.Fragment>
                <div className="container">
                    <Slider {...settings}>
                    {/* Conditional rendering of url */}
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    </Slider>
                </div>
            </React.Fragment>

        )
    }


}