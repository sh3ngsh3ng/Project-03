import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Carousel() {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      };



    return (
        <React.Fragment>
            <div id="carousel-div" className="container">
            <Slider {...settings}>
                <div>
                    <img className="carousel-img" src="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1642522076/brsb8vicbr3yxlrp2lnf.jpg"/>
                </div>
                <div>
                    <img className="carousel-img" src="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1642522118/lm37x62s5shswbxfrdip.jpg"/>
                </div>
                <div>
                    <img className="carousel-img" src="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1642522127/plxaqxtvpu1wbeahncmh.jpg"/>
                </div>
            </Slider>
            </div>
        </React.Fragment>
    )
}