import {React, useState} from 'react'
import ProductListing from "./ProductListing"
import ProductListingTab from "./ProductListingTab"
import ProductContext from './ProductContext'


export default function ProductSection() {

    const [activeTab, setActiveTab] = useState("all")
    
    const context = {
        'activeTab': activeTab,
        'setActiveTab': (evt) => {
            setActiveTab(evt.target.value)
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