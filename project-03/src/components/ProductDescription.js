import React from "react"
import { motion } from "framer-motion"

export default function ProductDescription(props) {



    return(
        <React.Fragment>
            <div id="product-description-div" className="container">
                {/* image section */}
                <motion.div id="pd-img-section" className="container" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: "tween", delay: 1 }}>
                    <img id="pd-img" src={props.product.image_url}/>
                </motion.div>
                {/* product info section */}
                <motion.div id="pd-description-section" className="container" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: "tween", delay: 1.5 }}>
                    <h3 id="pd-description-title">{props.product.product_name}</h3>
                    <p className="pd-paragraph"><b>Description:</b> {props.product.product_description} fawefawefawefawefawef fawef awef awef awef awef awef awefawef awef wae fawe fawe fawe fawe fawe fawe fwea fawe fawe fawe fawe fawe fawe</p>
                    <p className="pd-paragraph"><b>Room Size:</b> {props.product.room_size}</p>
                    <p className="pd-paragraph"><b>Room Type:</b> {props.product.room_type}</p>
                    <p className="pd-paragraph"><b>Play Time:</b> {props.product.play_time}</p>
                    <p className="pd-paragraph"><b>Tags: </b>{props.product.tags[0].name}</p>
                </motion.div>
            </div>
        </React.Fragment>
    )



}