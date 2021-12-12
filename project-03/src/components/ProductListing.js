import {React, useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import ProductContext from "../context/ProductContext"
import {useHistory} from "react-router-dom"
import {motion} from "framer-motion"


export default function ProductListing() {

    const context = useContext(ProductContext)
    const history = useHistory()
    
    const moreInfo = (listing) => {
        history.push("/products/" + listing.id, {
            "productInfo": listing
        })
    }
    // context.getActiveListings().then(res => setActiveListings(res))

    const getBadgeColor = (tag) => {
        let legend = {
            'horror': 'bg-danger',
            'suspense': 'bg-dark',
            'humour': "bg-warning",
            'relaxing': 'bg-success',
            'mystery': "bg-dark",
            'suspense': "bg-primary",
            'thriller': "bg-secondary"
        }
        return legend[tag]
    }


    return (
        <div id="active-listing-card-div" role="button">
            {context.getListings().map((listing, i) => (
                
                // card
                <motion.Card className="active-listing-card"
                    animate={{
                        x: 0
                    }}
                    initial={{
                        x: "-1000%"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        delay: i * 0.3
                    }}
                >
                    <Card.Img  variant="top" src={listing.image_url} />
                    <Card.Body>
                        <Card.Title>{listing.product_name}</Card.Title>

                        <div className="card-badge-div">
                            {listing.tags.map((tag)=> {
                                return <span className={"active-card-badge badge rounded-pill " +  getBadgeColor(tag.name)}>{tag.name}</span>
                            })}

                        </div>

                        <div className="active-listing-card-body">
                            <Card.Text className="active-listing-card-description">

                                    {listing.product_description}
                                    
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <div className="active-listing-card-button-div">
                        <Button className="active-listing-card-btn" variant="primary" onClick={()=>{
                            moreInfo(listing)
                        }}>Book Now!</Button>
                    </div>
                    <div className="active-listing-price-div">
                        <span className="active-listing-price">{"$" + listing.product_price / 100}/pax</span>
                    </div>
                </motion.Card>
            ))}
        </div>
    )
}


