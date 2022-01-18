import React, {useContext, useState, useEffect} from "react"
import OrdersContext from "../context/OrdersContext"


export default function PendingOrders() {
    
    let context = useContext(OrdersContext)
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            let response = await context.getPendingOrders()
            console.log(response.data)
            setData(response.data)
        }
        getData()
    },[])

    // context.getPendingOrders().then((results) => setData(results.data))
    return (
        <React.Fragment>
            {data.map((item) => {
                return (
                    <div className="container" style={{"border": "1px black solid"}}>
                        <p>Product Name: {item.productslot.product.product_name}</p>
                        <p>Big image: {item.productslot.product.image_url}</p>
                        <p>Thumbnail: {item.productslot.product.thumbnail_url}</p>
                        <p>Roomtype: {item.productslot.product.room_type}</p>
                        <p>Price: ${item.productslot.product.product_price / 100}</p>
                        <p>Datetime: {item.productslot.slot_datetime}</p>
                        <p>Order Status: {item.order.order_status}</p>
                        <p>Payment Status: {item.order_item_status}</p>
                        <p>Quantity: {item.order_item_quantity}</p>
                    </div>
                )
            })}
            "PendingOrder Component"
        </React.Fragment>
    )
}