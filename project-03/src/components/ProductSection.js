import {React, useState} from 'react'
import ProductListing from "./ProductListing"
import ProductListingTab from "./ProductListingTab"
import ProductContext from '../context/ProductContext'
import axios from "axios"

export default function ProductSection() {

    const [activeTab, setActiveTab] = useState("all")
    
    const context = {
        'activeTab': activeTab,
        'setActiveTab': (evt) => {
            setActiveTab(evt.target.value)
        },
        'getActiveListings': async () => {
            let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/products/active-listings")
            return response.data
        }
    }

    return (
        <div>
            <ProductContext.Provider value ={context}>
                <ProductListingTab />
                <ProductListing />
            </ProductContext.Provider>
        </div>
    )
}