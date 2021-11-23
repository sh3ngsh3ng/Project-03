import {React, useState} from 'react'
import ProductListing from "./ProductListing"
import ProductListingTab from "./ProductListingTab"


export default function ProductSection() {


    return (
        <div>
            <ProductListingTab />
            <ProductListing />
        </div>
    )
}