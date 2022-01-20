import axios from "axios"
import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import ProductListingTab from "../components/ProductListingTab"
import ProductListing from "../components/ProductListing"
import ProductContext from "../context/ProductContext"
import SearchFormV2 from "../components/SearchFormV2"
import SearchForm from "../components/SearchForm"
import MediaQuery from "react-responsive"


export default function SearchPage() {

    const [activeTab, setActiveTab] = useState("all")
    const [listings, setListings] = useState([])

    useEffect(() => {
        async function getData() {
            let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/products/active-listings")
            setListings(response.data)
        }
        getData()
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
        <React.Fragment>
            <ProductContext.Provider value ={context}>
            
            <NavBar />

            {/* mobile version search form */}
            <MediaQuery maxWidth={767.9}>
                <SearchForm />
            </MediaQuery>
            
            <div style={{"display": "flex"}}>

                {/* non-mobile search form */}
                <div id="search-form-container">
                    <MediaQuery minWidth={768}>
                        <SearchFormV2 />
                    </MediaQuery>
                </div>


                {/* product display */}
                <div id="product-section-div" className="container">
                    {/* only show productlistingtab for mobile */}
                    {/* <ProductListingTab />  */}
                    <ProductListing />
                </div>
            </div>

            </ProductContext.Provider>
        </React.Fragment>
    )
}