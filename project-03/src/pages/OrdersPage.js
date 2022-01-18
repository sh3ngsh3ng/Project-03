import React from "react"
import NavBar from "../components/NavBar"
import {useState} from "react"
import PendingOrders from "../components/PendingOrders"
import OrderHistory from "../components/OrderHistory"
import Notifications from "../components/Notifications"
import axios from "axios"
import { getUserId } from "./utils"
import OrdersContext from "../context/OrdersContext"

export default function OrdersPage () {

    const [activeContent, setActiveContent] = useState("notification")
    
    const changeContent = (evt) => {
        setActiveContent(evt.target.value)
    }

    const BASE_URL = "https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/orders/"

    const renderContent = () => {
        if (activeContent == "pending") {
            // call pending orders, display pending Orders
            return <PendingOrders />
        }
        if (activeContent == "notification") {
            return <Notifications />
        }
        if (activeContent == "history") {
            return <OrderHistory />
        }
    }

    const context = {
        'BASE_URL': BASE_URL,
        'getPendingOrders': async() => {
            let results = axios.get(BASE_URL + "pending", {
                params: {
                    'userId': getUserId()
                }
            })
            return results
        },
        'getOrderHistory': async() => {
            let results = axios.get(BASE_URL + "order-history", {
                params: {
                    'userId': getUserId()
                }
            })
            return results
        }
    }




    return (
        <React.Fragment>
            <OrdersContext.Provider value={context}>
            <NavBar />
            <div id="orders-page-div">
            <div id="orders-page-container" className="container">
                
                {/* Start of navigation pane */}
                <div id="orders-navigation-pane">
                    <div id="orders-page-navigation-pane" className="list-group">
                        <button class={"list-group-item list-group-item-action " + (activeContent == "profile"? "active": null)} value="profile" onClick={(evt) => changeContent(evt)}
                        ><span className="navigation-pane-text">Profile</span></button>
                        <button class={"list-group-item list-group-item-action " + (activeContent == "notification"? "active": null)} value="notification" onClick={(evt) => changeContent(evt)}
                        ><span className="navigation-pane-text">Notifications</span>
                        {/* <span class="badge bg-primary rounded-pill navigation-pane-text">14</span> */}
                        </button>
                        <button class={"list-group-item list-group-item-action " + (activeContent == "pending"? "active": null)} value="pending" onClick={(evt) => changeContent(evt)}
                        ><span className="navigation-pane-text">Pending</span></button>
                        <button class={"list-group-item list-group-item-action " + (activeContent == "history"? "active": null)} value="history" onClick={(evt) => changeContent(evt)}
                        ><span className="navigation-pane-text">Order History</span></button>
                    </div>
                </div>
                {/* end of navigation pane */}


                {/* start of display content */}
                <div id="orders-page-content-display" className="container-fluid">
                    {/* render content */}
                    {renderContent()}
                </div>
                {/* end of display content */}
            </div>
            </div>
            </OrdersContext.Provider>
        </React.Fragment>
        
    )


}