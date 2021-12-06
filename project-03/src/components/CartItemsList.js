import React, {useContext} from "react"
import CartItemsContext from "../context/CartItemsContext"
import {motion} from 'framer-motion/dist/es/index'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function CartItemsList() {

    let context = useContext(CartItemsContext)

    return (
        <React.Fragment>
            {context.cartItems().map(function(cartItem, i) {
                return (
                    <motion.div className="cart-item-div"
                        animate={{
                            x: 0
                        }}
                        initial={{
                            x: "-100%"
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            delay: i * 0.05
                        }}
                    >

                        <div className="cart-card card-body">
                            <div class="cart-item-header-div">
                                <h1 class="cart-item-title">{cartItem.productslot.product.product_name}</h1>
                                <i class="delete-cart-item-icon bi bi-x-lg" onClick={() => context.deleteItem(cartItem.product_slots_id)}></i>
                            </div>
                            <div class="cart-item-image-div">
                                <img class="cart-image" src={cartItem.productslot.product.thumbnail_url} />
                            </div>
                            <div class="cart-item-datetime-div">
                                <span class="cart-item-date">Date: {cartItem.productslot.slot_datetime.slice(0,10)}</span>
                                <span class="cart-item-time">Time: {cartItem.productslot.slot_datetime.slice(12, 16)}</span>
                            </div>
                            <div className="cart-quantity-div">
                                <span class="cart-item-quantity">Quantity: </span>
                                <button class="adjust-quantity-button" onClick={() => context.deleteOne(cartItem.product_slots_id)}><i class="bi bi-dash" ></i></button>
                                    <button class="quantity-display">{cartItem.cart_items_quantity}</button>
                                <button class="adjust-quantity-button" onClick={() => context.addOne(cartItem.product_slots_id)}><i class="bi bi-plus" ></i></button>
                            </div>
                            <div class="cart-item-price-div">
                                <p class="cart-item-total-price-text">Total Price</p>
                                <p class="cart-item-pax-price-text">{"($" + cartItem.productslot.product.product_price/100 + "/pax):"}</p>
                                <p>${cartItem.productslot.product.product_price / 100 * cartItem.cart_items_quantity}</p>
                            </div>
                            
                        </div>

                    </motion.div>
                )
            })}
        </React.Fragment>
    )
}