import {React, useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import CartItemsContext from "../context/CartItemsContext"
import CartItemsList from '../components/CartItemsList'


export default function CartPage(){

    const {userId} = useParams()
    const [user, setUser] = useState(userId)
    const [cartItems, setCartItems] = useState([])
    const [quantityUpdate, setQuantityUpdate] = useState(false)

    const BASE_URL = "https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/cart/"

    // use effect to fetch cart items on load
    useEffect( async()=> {
        const fetchCart = async(user_id) => {
            let response = await axios.get(BASE_URL + user_id)
            setCartItems(response.data)
        }
        if(parseInt(userId)) {
            await fetchCart(user)
        }
    }, [userId])

    // use effect to refetch the updated quantity on adding, deleting, etc
    useEffect( async()=> {
        const fetchCart = async(user_id) => {
            let response = await axios.get(BASE_URL + user_id)
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
            let response = await axios.get(BASE_URL +  userId + "/" + product_slots_id + "/add-one")
            setQuantityUpdate(true)
        },
        'deleteOne': async (product_slots_id) => {
            let response = await axios.get(BASE_URL + userId + "/" + product_slots_id + "/delete-one")
            setQuantityUpdate(true)
        },
        'deleteItem': async (product_slots_id) => {
            let response = await axios.get(BASE_URL + userId + "/" + product_slots_id + "/delete-item")
            setQuantityUpdate(true)
        },
        'deleteCart': async () => {
            let response = await axios.get(BASE_URL + userId + "/clear")
            setQuantityUpdate(true)
        },
        'checkOut': async () => {

        }
    }

    return(
        <CartItemsContext.Provider value={context}>
            <h1>User's Cart Page</h1>
            <p className="btn btn-danger" onClick={() => context.deleteCart()}>Clear Cart</p>
            <p className="btn btn-success">CheckOut</p>
            <CartItemsList />
        </CartItemsContext.Provider>

    )



}




