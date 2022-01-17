import React from "react"
import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import CartItemsContext from "../context/CartItemsContext"
import CartItemsList from '../components/CartItemsList'
import { sendJwt } from "./utils"
import NavBar from '../components/NavBar'

export default function CartPage(){

    const {userId} = useParams()
    const [user, setUser] = useState(userId)
    const [cartItems, setCartItems] = useState([])
    const [quantityUpdate, setQuantityUpdate] = useState(false)

    

    // const BASE_URL = "https://escape-rooms-project03.herokuapp.com/api/cart/"
    const BASE_URL = "https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/cart/"

    // use effect to fetch cart items on load
    useEffect( async()=> {
        const fetchCart = async(user_id) => {
            let response = await axios.get(BASE_URL + user_id, sendJwt())
            console.log(response.data)
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
    
    const renderCheckOutBtn = () => {
        if (cartItems.length !== 0) {
            return (
                <div id="cart-page-submit-btn-div">
                    <btn id="cart-page-submit-btn" className="btn btn-success" onClick={() => context.checkOut()}>Check Out</btn>
                </div>
            )
        }
    }



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
            let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/checkout/" + userId, sendJwt())
            console.log(response.data)
            window.location.assign(response.data.url)
        }
    }

    return(
        <React.Fragment>
            <NavBar/>
            <CartItemsContext.Provider value={context}>
                <div style={{display:"flex", justifyContent: "center", marginTop: "20px"}}>
                    <h1 style={{textDecoration: "underline"}}>Cart Items</h1>
                </div>
                <div>
                    <span id="cart-page-clear-cart-btn" role="button" onClick={() => context.deleteCart()}>Clear Cart</span>
                </div>
                {renderCheckOutBtn()}
                <CartItemsList />
            </CartItemsContext.Provider>
        </React.Fragment>

    )



}




