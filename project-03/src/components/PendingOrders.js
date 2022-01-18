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
                    <div className= "container pending-order-item">
                        <div style={{"display": "flex", "justify-content": "space-between", "margin-bottom": "10px"}}>
                            <span className="pending-order-text">{item.productslot.product.room_type}</span>
                            <span className="pending-order-text">Payment Status: {item.order.order_status}</span>
                        </div>
                        {/* <p>Big image: {item.productslot.product.image_url}</p> */}
                        {/* <img src={item.productslot.product.image_url}/> */}
                        {/* <p>Thumbnail: {item.productslot.product.thumbnail_url}</p> */}
                        <div className="d-flex" style={{"margin-bottom": "10px"}}>
                            <img style={{"height": "100%"}} src={item.productslot.product.thumbnail_url} style={{"margin-right": "20px"}}/>
                            <div>
                                <p className="pending-order-text" style={{"margin": "0"}}>Room: {item.productslot.product.product_name}</p>
                                <p className="pending-order-text" style={{"margin": "0"}}>Price: ${item.productslot.product.product_price / 100}</p>
                                <p className="pending-order-text" style={{"margin": "0"}}>Quantity: {item.order_item_quantity}</p>
                            </div>
                        </div>

                        <div style={{"display": "flex","justify-content": "space-between"}}>
                            <span className="pending-order-text">Order Date: {item.productslot.slot_datetime.slice(0, 10) + " "} </span>
                            <span className="pending-order-text">Order Status: {item.order_item_status}</span>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}