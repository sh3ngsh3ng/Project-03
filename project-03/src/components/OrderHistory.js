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
                    <div className="container" style={{"background": "grey", "margin-bottom": "10px"}}>
                        <p>Order Date: {order.order_date}</p>
                        <p>Total Cost: {order.order_total_cost}</p>
                        <ol className="list-group list-group-numbered">
                            {order.orderitems.map((item) => {
                                return (
                                    <li className="list-group-item history justify-content-between align-items-start" style={{"background": "pink", "display": "flex"}}>
                                        
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{item.productslot.product.product_name}</div>
                                            <div>Slot Time: {item.productslot.slot_datetime.slice(0, 10) + " ,"} {item.productslot.slot_datetime.slice(11, 16)}</div>
                                            <div>Order Status: {item.order_item_status.charAt(0).toUpperCase() + item.order_item_status.slice(1)}</div>
                                        </div>
                                        <span>x {item.order_item_quantity}</span>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )
            })}
        </React.Fragment>
    )
}