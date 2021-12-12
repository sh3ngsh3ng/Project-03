import { React, useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom"
import axios from "axios"
import { checkIfLogin, getUserId, sendJwt } from "./utils"
import { motion } from "framer-motion"
import moment from "../../node_modules/moment/moment.js"
import FlashMessage from "react-flash-message"


export default function ProductInfoPage() {
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
                        style={{position:"absolute"}}
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
            let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us23.gitpod.io/api/cart/"
            + getUserId() + "/" + productSlotId + "/" + "add-item", sendJwt())
            setAddedToCart(true)
        } else {
            history.push("/login")
        }
    }

    const animateLetters = () => {
        let arrayOfLetters = Array.from(product.product_name)
        return (
            arrayOfLetters.map(function (letter, i) {

                return (
                    <motion.span
                        className="product-title-letters"
                        animate={{
                            opacity: 1
                        }}
                        initial={{
                            opacity: 0
                        }}
                        transition={{
                            type: "spring",
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
                product.productslots.map((slots) => {
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
            <div id="product-title-div">{animateLetters()}</div>

            <motion.div id="product-info-image-div"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", delay: 2 }}
            >
                <img className="product-info-image" src={product.image_url} />
            </motion.div>

            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", delay: 3 }}
            >
                <div className="product-info-description-div">
                    <span id="description-title-text">Description</span>
                </div>

                <div className="product-info-description-div">
                    <span>{product.product_description}</span>
                </div>
            </motion.div>

            {/* slots table */}
            <motion.div id="product-info-slots-table"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", delay: 4 }}
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