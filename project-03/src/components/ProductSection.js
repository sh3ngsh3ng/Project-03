import {React, useEffect, useState} from 'react'
import ProductListing from "./ProductListing"
import ProductListingTab from "./ProductListingTab"
import SearchForm from './SearchForm'
import ProductContext from '../context/ProductContext'
import axios from "axios"

export default function ProductSection() {

    const [activeTab, setActiveTab] = useState("all")
    const [listings, setListings] = useState([])

    useEffect(async() => {
        let response = await axios.get("https://escape-rooms-project03.herokuapp.com/api/products/active-listings")
        setListings(response.data)
        console.log(listings)
    }, [])

    const context = {
        'activeTab': activeTab,
        'setActiveTab': (evt) => {
            setActiveTab(evt.target.value)
        },
        'getListings': () => {
            console.log(listings)
            return listings
        },
        'setSearchResults': (newResults) => {
            setListings(newResults)
        }
    }

    return (
        <div id="product-section-div">
            <ProductContext.Provider value ={context}>
                    <ProductListingTab />
                    <SearchForm/>
                    <ProductListing />
            </ProductContext.Provider>
        </div>
    )
}