import { React, useContext } from "react"
import ProductContext from "../context/ProductContext"

export default function Tabs(props) {

    const context = useContext(ProductContext)

    return (
        <li className="nav-item">
            <button className={`nav-link ${context.activeTab == props.value? "active": null} listing-tab`}
            onClick={(evt) => {
                context.setActiveTab(evt)
            }}
            value={props.value}
            >{props.tabName}</button>
        </li>
    )


}