import React, { useContext, useState, useEffect } from "react"
import OrdersContext from "../context/OrdersContext"

export default function OrderHistory() {

    let context = useContext(OrdersContext)
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            let response = await context.getOrderHistory()
            console.log(response.data)
            setData(response.data)
        }
        getData()
    }, [])



    return (
        <React.Fragment>
            {data.map((order) => {
                return (
                    <div>
                        <p>Order Date: {order.order_date}</p>
                        <p>Total Cost: {order.order_total_cost}</p>
                        <ul>
                            {order.orderitems.map((item) => {
                                return (
                                    <li>
                                        <p>Product Name: {item.productslot.product.product_name}</p>
                                        <p>Quantity: {item.order_item_quantity}</p>
                                    
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </React.Fragment>
    )
}