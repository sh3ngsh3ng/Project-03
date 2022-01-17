import React, {useContext, useState, useEffect} from "react"
import OrdersContext from "../context/OrdersContext"


export default function PendingOrders() {
    
    let context = useContext(OrdersContext)
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            let response = await context.getPendingOrders()
            setData(response.data)
        }
        getData()
    },[])

    // context.getPendingOrders().then((results) => setData(results.data))
    return (
        <React.Fragment>
            {data.map(function(each) {
                return <h1>{each.id}</h1>
            })}
            "PendingOrder Component"
        </React.Fragment>
    )
}