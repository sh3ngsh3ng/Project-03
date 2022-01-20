import React from "react"


export default function ProductDescription(props) {



    return(
        <React.Fragment>
            <div id="product-description-div" className="container">
                <div id="pd-img-section" className="container">
                    <img id="pd-img" src={props.product.image_url}/>
                </div>
                <div id="pd-description-section" className="container">
                    <h3 id="pd-description-title">{props.product.product_name}</h3>
                    <p><b>Description:</b> {props.product.product_description} fawefawefawefawefawef fawef awef awef awef awef awef awefawef awef wae fawe fawe fawe fawe fawe fawe fwea fawe fawe fawe fawe fawe fawe</p>
                    <p><b>Room Size:</b> {props.product.room_size}</p>
                    <p><b>Room Type:</b> {props.product.room_type}</p>
                    <p><b>Play Time:</b> {props.product.play_time}</p>
                    <p><b>Tags: </b>{props.product.tags[0].name}</p>
                </div>
            </div>
        </React.Fragment>
    )



}