import {React, useState} from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"
import { getUserId, sendJwt } from "./utils"

export default function ProductInfoPage() {
    const [productSlotId, setProductSlotId] = useState()

    let location = useLocation()
    let product = location.state.productInfo


    const addItemToCart = async () => {
        let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/cart/" 
        + getUserId() + "/" + productSlotId + "/" + "add-item", sendJwt())
    }


    return (
        <div>
            <h1>{product.product_name}</h1>
            <img src={product.image_url}/>
            <p>Description: {product.product_description}</p>

            <select onChange={(evt) => {
                setProductSlotId(evt.target.value)
            }}>
                <option selected disabled>Please Choose a Slot</option>
                {product.productslots.map((slots) => {
                    return (
                        <option value={slots.id}>{slots.slot_datetime}</option>
                    )
                })}
            </select>

            <button className="btn btn-success" onClick={() => addItemToCart()}>Add To Cart</button>

            <p>{product.productslots.length > 0? product.productslots[0].slot_quantity + "/" + product.productslots[0].slot_quantity : "no slots avail"}</p>
        </div>
        

    )

}