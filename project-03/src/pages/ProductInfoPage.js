import React from "react"
import {useLocation} from "react-router-dom"



export default function ProductInfoPage() {


    let location = useLocation()
    let product = location.state.productInfo

    return (
        <React.Fragment>
            <h1>{product.product_name}</h1>
            <img src={product.image_url}/>
            <p>Description: {product.product_description}</p>
        </React.Fragment>
        

    )

}