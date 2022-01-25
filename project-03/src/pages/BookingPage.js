import React, { useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom"
import axios from "axios"
import { checkIfLogin, getUserId, sendJwt } from "./utils"
import { motion } from "framer-motion"
import moment from "moment"
import FlashMessage from "react-flash-message"
import NavBar from "../components/NavBar"
import ProductDescription from "../components/ProductDescription"


export default function BookingPage() {
    const [addedToCart, setAddedToCart] = useState(false)

    let location = useLocation()
    let product = location.state.productInfo
    const history = useHistory()

    const flashMessageAddToCart = () => {
        if (addedToCart) {
            return (
                <FlashMessage duration={5000}>
                    <motion.div
                        className="alert-notif-div alert alert-success"
                        style={{position:"absolute", "zIndex": "100", "top": "5vh"}}
                        role="alert"
                        animate={{ y: 0 }}
                        initial={{ y: "-100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            delay: 0.02
                        }}
                        
                    >
                        <div class="alert-notif-content">
                            <i class="bi bi-check-circle"></i>
                            <span class="alert-notif-text">{` `} Added To Cart</span>
                        </div>
                    </motion.div>
                </FlashMessage>
            )
        } else {
            return null
        }
    }

    useEffect(() => {
        setTimeout(function () {
            setAddedToCart(false)
        }, 5000)
    }, [addedToCart])

    const addItemToCart = async (productSlotId) => {
        if (checkIfLogin()) {
            // console.log(getUserId())
            // return
            let response = await axios.get("https://project-03-virtual-rooms.herokuapp.com/api/cart/"
            + getUserId() + "/" + productSlotId + "/" + "add-item", sendJwt())
            setAddedToCart(true)
            console.log(addedToCart)
            
        } else {
            history.push("/login")
        }
    }



    const renderSlotsRow = () => {
        if (product.productslots.length > 0) {
            return (
                product.productslots.map((slots) => {
                    console.log(slots.id)
                    return <tr>
                        <td className="table-data">{moment(slots.slot_datetime).format('L')}</td>
                        <td className="table-data">{moment(slots.slot_datetime).format('LT')}</td>
                        <td className="table-data">{slots.slot_quantity}</td>
                        <td className="table-data" ><button className="btn btn-sm btn-success" onClick={() => addItemToCart(slots.id)}>Add To Cart</button></td>
                    </tr>
                })
            )
        } else {
            return <tr><td colSpan="4" className="table-data">No Slots Available</td></tr>
        }

    }


    return (
        <div>
            {flashMessageAddToCart()}
            <NavBar />
            <ProductDescription product={product}/>
        

            {/* slots table */}
            <motion.div id="product-info-slots-table"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", delay: 2 }}
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