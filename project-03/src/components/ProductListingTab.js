import {React, useContext} from 'react'
import ProductContext from "../context/ProductContext"
import Tabs from "./Tabs"

export default function ProductListingTab() {

    // const [activeTab, setActiveTab] = useState("all")

    // const changeTab = (evt) => {
    //     setActiveTab(evt.target.value)
    // }

    const context = useContext(ProductContext)

    return (
        <div>
            <ul className="nav nav-tabs">
                <Tabs tabName="Escape Rooms" value="all"/>
                <Tabs tabName="Amazing Race" value="featured"/>
                <Tabs tabName="Mystery Murder" value="promotions"/>
            </ul>
        </div>
    )
}




// <li className="nav-item">
//                     <button className={`nav-link ${context.activeTab == "all"? "active": null} listing-tab`}
//                     onClick={(evt) => {
//                         context.setActiveTab(evt)
//                     }}
//                     value="all"
//                     >Escape Rooms</button>
//                 </li>
//                 <li className="nav-item">
//                     <button className={`nav-link ${context.activeTab == "featured"? "active": null} listing-tab`}
//                     onClick={(evt) => {
//                         context.setActiveTab(evt)
//                     }}
//                     value="featured"
//                     >Amazing Race</button>
//                 </li>
//                 <li className="nav-item">
//                     <button className={`nav-link ${context.activeTab == "promotions"? "active": null} listing-tab`}
//                     onClick={(evt) => {
//                         context.setActiveTab(evt)
//                     }}
//                     value="promotions"
//                     >Mystery Murder</button>
//                 </li>