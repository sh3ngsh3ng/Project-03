import {React} from "react"
import {useLocation} from "react-router-dom"


export default function ProductInfoPage() {
    

    let location = useLocation()
    let product = location.state.productInfo
    console.log(product)
    return (
        <div>
            <h1>{product.product_name}</h1>
            <img src={product.image_url}/>
            <p>Description: {product.product_description}</p>

            <select>
                {product.productslots.map((slots) => {
                    return (
                        <option value={slots.id}>{slots.slot_datetime}</option>
                    )
                })}
            </select>

            <p>{product.productslots.length > 0? product.productslots[0].slot_quantity + "/" + product.productslots[0].slot_quantity : "no slots avail"}</p>
        </div>
        

    )

}