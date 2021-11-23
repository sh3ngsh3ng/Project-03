import React from 'react'

export default function ProductListingTab() {



    return (
        <React.Fragment>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link active">All</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Featured</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Promotions</button>
                </li>
            </ul>
        </React.Fragment>
    )
}