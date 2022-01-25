import React from "react"
import { Wave } from "react-animated-text"
import "./LoadData.css"


export default function LoadData() {


    return(
        <React.Fragment>
            <div className="container" id="load-data-container">
                <div id="load-data-div">
                    <Wave text="LOADING APPLICATION" effect="stretch" effectChange={2.0} speed={20}/>
                </div>
            </div>
                
        </React.Fragment>
        
    )


}