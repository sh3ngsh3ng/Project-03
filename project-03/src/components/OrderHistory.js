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
                    <div className="container order-history-item-div" >
                        <p className="pending-order-text">Order Date: {order.order_date.slice(0, 10)}</p>
                        <p className="pending-order-text">Total Cost: ${order.order_total_cost / 100}</p>
                        <ol className="list-group list-group-numbered">
                            {order.orderitems.map((item) => {
                                return (
                                    <li className="list-group-item order-history-item" style={{"background": "pink", "display": "flex"}}>
                                        
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold pending-order-text">{item.productslot.product.product_name}</div>
                                            <div className="pending-order-text">Slot Time: {item.productslot.slot_datetime.slice(0, 10) + " ,"} {item.productslot.slot_datetime.slice(11, 16)}</div>
                                            <div className="pending-order-text">Order Status: {item.order_item_status.charAt(0).toUpperCase() + item.order_item_status.slice(1)}</div>
                                        </div>
                                        <div>
                                            <span className="pending-order-text">Qty x {item.order_item_quantity}</span>
                                        </div>
                                        
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