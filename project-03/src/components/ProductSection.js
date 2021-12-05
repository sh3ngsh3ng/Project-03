import {React, useEffect, useState} from 'react'
import ProductListing from "./ProductListing"
import ProductListingTab from "./ProductListingTab"
import ProductContext from '../context/ProductContext'
import axios from "axios"

export default function ProductSection() {

    const [activeTab, setActiveTab] = useState("all")
    const [listings, setListings] = useState([])

    useEffect(async() => {
        let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/products/active-listings")
        setListings(response.data)
        console.log(listings)
    }, [setListings])


    const context = {
        'activeTab': activeTab,
        'setActiveTab': (evt) => {
            setActiveTab(evt.target.value)
        },
        'getListings': () => {
            console.log(listings)
            return listings
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