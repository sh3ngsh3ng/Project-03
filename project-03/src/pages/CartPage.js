import {React, useEffect, useState} from 'react'
import {useParams, useHistory} from "react-router-dom"
import axios from "axios"
import CartItemsContext from "../context/CartItemsContext"
import CartItemsList from '../components/CartItemsList'
import { sendJwt } from "./utils"

export default function CartPage(){

    const {userId} = useParams()
    const [user, setUser] = useState(userId)
    const [cartItems, setCartItems] = useState([])
    const [quantityUpdate, setQuantityUpdate] = useState(false)
    const history = useHistory()

    

    const BASE_URL = "https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/cart/"

    // use effect to fetch cart items on load
    useEffect( async()=> {
        const fetchCart = async(user_id) => {
            let response = await axios.get(BASE_URL + user_id, sendJwt())
            setCartItems(response.data)
        }
        if(parseInt(userId)) {
            await fetchCart(user)
        }
    }, [userId])

    // use effect to refetch the updated quantity on adding, deleting, etc
    useEffect( async()=> {
        const fetchCart = async(user_id) => {
            let response = await axios.get(BASE_URL + user_id, sendJwt())
            setCartItems(response.data)
        }
        if(parseInt(userId)) {
            await fetchCart(user)
            setQuantityUpdate(false)
        }
    }, [quantityUpdate])
    
    // context
    const context = {
        'cartItems': () => {
            return cartItems
        },
        'addOne': async (product_slots_id) => {
            let response = await axios.get(BASE_URL +  userId + "/" + product_slots_id + "/add-one", sendJwt())
            setQuantityUpdate(true)
        },
        'deleteOne': async (product_slots_id) => {
            let response = await axios.get(BASE_URL + userId + "/" + product_slots_id + "/delete-one", sendJwt())
            setQuantityUpdate(true)
        },
        'deleteItem': async (product_slots_id) => {
            let response = await axios.get(BASE_URL + userId + "/" + product_slots_id + "/delete-item", sendJwt())
            setQuantityUpdate(true)
        },
        'deleteCart': async () => {
            let response = await axios.get(BASE_URL + userId + "/clear", sendJwt())
            setQuantityUpdate(true)
        },
        'checkOut': async () => {
            let response = await axios.get(BASE_URL + "checkout/" + userId, sendJwt())
            window.location.replace(BASE_URL + "checkout/" + userId)
        }
    }

    return(
        <CartItemsContext.Provider value={context}>
            <h1>User's Cart Page</h1>
            <p className="btn btn-danger" onClick={() => context.deleteCart()}>Clear Cart</p>
            <p className="btn btn-success" onClick={() => context.checkOut()}>CheckOut</p>
            <CartItemsList />
        </CartItemsContext.Provider>

    )



}




