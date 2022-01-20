import React from "react"
import Slider from "react-slick"
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Animated} from "react-animated-css"
import StartBtn from "./StartBtn";


export default function Carousel() {
    const sequence = ['Welcome', 2000, "Your one stop fun!", 2000, "Can you escape?", 2000]
    var settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
      };


    return (
        <React.Fragment>
            <motion.div id="carousel-brand-name-div"
                animate={{y:0}}
                initial={{y:"-1000%"}}
                transition={{
                    type:"spring",
                    stiffness: 50,
                    delay: 1
                }}
            >
                <img id="carousel-brand-name-img" src={"https://res.cloudinary.com/dt7n0rbhy/image/upload/v1642524796/awnlqzcwl8pvdbkvgtug.png"}/>
            </motion.div>
            <div id="carousel-div" className="container">
            <div id="carousel-btn-div">
                <StartBtn />
            </div>
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