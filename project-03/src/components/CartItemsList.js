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
                            <i class="delete-cart-item bi bi-x-lg" onClick={() => context.deleteItem(cartItem.product_slots_id)}></i>
                            <h1>{cartItem.productslot.product.product_name}</h1>
                            <img src={cartItem.productslot.product.thumbnail_url} />
                            <p>Date: {cartItem.productslot.slot_datetime}</p>
                            <p>$ {cartItem.productslot.product.product_price / 100} / pax</p>
                            <p>Total Price: $ {cartItem.productslot.product.product_price / 100 * cartItem.cart_items_quantity}</p>
                            <div className="cart-quantity-div">
                                <span>Quantity: </span>
                                <i class="bi bi-caret-left" onClick={() => context.deleteOne(cartItem.product_slots_id)}></i>
                                    <p>{cartItem.cart_items_quantity}</p>
                                <i class="bi bi-caret-right" onClick={() => context.addOne(cartItem.product_slots_id)}></i>
                            </div>
                            
                        </div>

                    </motion.div>
                )
            })}
        </React.Fragment>
    )
}