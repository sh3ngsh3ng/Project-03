import {React, useState} from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"
import { getUserId, sendJwt } from "./utils"
import { motion } from "framer-motion"
import moment from "../../node_modules/moment/moment.js"

export default function ProductInfoPage() {
    const [productSlotId, setProductSlotId] = useState()

    let location = useLocation()
    let product = location.state.productInfo
    console.log(product)

    const addItemToCart = async (productSlotId) => {
        let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/cart/" 
        + getUserId() + "/" + productSlotId + "/" + "add-item", sendJwt())
    }

    const animateLetters = () => {
        let arrayOfLetters = Array.from(product.product_name)
        return (
            arrayOfLetters.map(function(letter,i) {
                
                return (
                        <motion.span
                            className="product-title-letters"
                            animate = {{
                                opacity: 1
                            }}
                            initial = {{
                                opacity: 0
                            }}
                            transition = {{
                                type:"spring",
                                delay: i * 0.08
                            }}
                        >
                            {letter}
                        </motion.span>
                )
            })
        )
    }


    const renderSlotsRow = () => {
        if (product.productslots.length > 0) {
            return (
                product.productslots.map((slots)=>{
                    console.log(slots)
                    return <tr>
                        <td className="table-data">{moment(slots.slot_datetime).format('L')}</td>
                        <td className="table-data">{moment(slots.slot_datetime).format('LT')}</td>
                        <td className="table-data">{slots.slot_quantity}</td>
                        <td className="table-data"><button className="btn btn-sm btn-success" onClick={() => addItemToCart(slots.id)}>Add To Cart</button></td>
                    </tr>
                })
            )
        } else {
            return <tr>No Slots Available</tr>
        }

    }


    return (
        <div>
            <div id="product-title-div">{animateLetters()}</div>
            
            <motion.div id="product-info-image-div"
                animate ={{opacity:1}}
                initial = {{opacity:0}}
                transition ={{type:"spring", delay:2}}
            >
                <img src={product.image_url}/>
            </motion.div>
            
            <motion.div
                animate ={{opacity:1}}
                initial = {{opacity:0}}
                transition ={{type:"spring", delay:3}}
            >
                <div id="product-info-description-div">
                    <span id="description-title-text">Description</span>
                </div>

                <div id="product-info-description-div">
                    <span>{product.product_description}</span>
                </div>
            </motion.div>
            
            {/* table start here */}
            <motion.div id="product-info-slots-table"
                animate ={{opacity:1}}
                initial = {{opacity:0}}
                transition ={{type:"spring", delay:4}}
            >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Slots Left</th>
                            <th scope="col">Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderSlotsRow()}
                    </tbody>
                </table>
            </motion.div>
        </div>
        

    )

}