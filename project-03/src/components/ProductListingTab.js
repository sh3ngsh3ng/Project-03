import {React, useContext} from 'react'
import ProductContext from "../context/ProductContext"

export default function ProductListingTab() {

    // const [activeTab, setActiveTab] = useState("all")

    // const changeTab = (evt) => {
    //     setActiveTab(evt.target.value)
    // }

    const context = useContext(ProductContext)

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className={`nav-link ${context.activeTab == "all"? "active": null}`}
                    onClick={(evt) => {
                        context.setActiveTab(evt)
                    }}
                    value="all"
                    >All</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${context.activeTab == "featured"? "active": null}`}
                    onClick={(evt) => {
                        context.setActiveTab(evt)
                    }}
                    value="featured"
                    >Featured</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${context.activeTab == "promotions"? "active": null}`}
                    onClick={(evt) => {
                        context.setActiveTab(evt)
                    }}
                    value="promotions"
                    >Promotions</button>
                </li>
            </ul>
        </div>
    )
}