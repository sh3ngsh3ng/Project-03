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
                        <div className="pending-order-header-div">
                            <span className="pending-order-text">{item.productslot.product.room_type.replace("_", " ").replace(/(?: |\b)(\w)/g, function(key) { return key.toUpperCase()})}</span>
                            <span className="pending-order-text">Payment Status: {item.order.order_status.charAt(0).toUpperCase() + item.order.order_status.slice(1)}</span>
                        </div>
                        {/* <p>Big image: {item.productslot.product.image_url}</p> */}
                        {/* <img src={item.productslot.product.image_url}/> */}
                        {/* <p>Thumbnail: {item.productslot.product.thumbnail_url}</p> */}
                        <div className="pending-order-body-div">
                            <img className="pending-order-img" src={item.productslot.product.thumbnail_url} style={{"margin-right": "20px"}}/>
                            <div>
                                <p className="pending-order-text">Room: {item.productslot.product.product_name}</p>
                                <p className="pending-order-text">Price: ${item.productslot.product.product_price / 100}</p>
                                <p className="pending-order-text">Quantity: {item.order_item_quantity}</p>
                            </div>
                        </div>

                        <div className="pending-order-bottom-div">
                            <span className="pending-order-text">Order Date: {item.productslot.slot_datetime.slice(0, 10) + " "} </span>
                            <span className="pending-order-text">Order Status: {item.order_item_status.charAt(0).toUpperCase() + item.order_item_status.slice(1)}</span>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
