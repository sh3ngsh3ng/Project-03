import React from "react";
import { sample01, spidey01, spidey02 } from "../images"


export default function FeaturedCarousel() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={sample01} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={spidey01} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={spidey02} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}