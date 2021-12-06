import React from "react";
import { sample01, bannerImage } from "../images"


export default function FeaturedCarousel() {
    return (
        <div id="banner-div">
            <img id="banner-img" src={bannerImage}/>
        </div>
    )
}