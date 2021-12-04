import React, {useContext} from "react"
import CartItemsContext from "../context/CartItemsContext"
import {motion} from 'framer-motion/dist/es/index'

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

                        <div className="card-body">
                            <h1>{cartItem.productslot.product.product_name}</h1>
                            <img src={cartItem.productslot.product.thumbnail_url} />
                            <p>Date: {cartItem.productslot.slot_datetime}</p>
                            <p>Price: {cartItem.productslot.product.product_price}</p>
                            <button onClick={() => context.addOne(cartItem.product_slots_id)}>plus one icon</button>
                            <p>Quantity: {cartItem.cart_items_quantity}</p>
                            <button onClick={() => context.deleteOne(cartItem.product_slots_id)}>minus one icon</button>
                            <button onClick={() => context.deleteItem(cartItem.product_slots_id)}>Delete Item icon</button>
                        </div>

                    </motion.div>
                )
            })}
        </React.Fragment>
    )
}