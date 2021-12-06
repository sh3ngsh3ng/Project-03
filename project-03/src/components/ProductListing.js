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

    return (
        <div id="active-listing-card-div">
            {context.getListings().map((listing, i) => (
                // card
                <motion.Card className="active-listing-card"
                    animate={{
                        x: 0
                    }}
                    initial={{
                        x: "-100%"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        delay: i * 0.1
                    }}
                >
                    <Card.Img variant="top" src={listing.thumbnail_url} />
                    <Card.Body>
                        <Card.Title>{listing.product_name}</Card.Title>
                        <Card.Text>
                            {listing.product_description}
                        </Card.Text>
                        {/* <Link to={"/products/" + listing.id}> */}
                            <Button variant="primary" onClick={()=>{
                                moreInfo(listing)
                            }}>Book Now!</Button>
                        {/* </Link> */}
                    </Card.Body>
                </motion.Card>
            ))}
        </div>
    )
}






// TESTING
// export default function ProductListing() {
//     return (
//         <div>
//             {/* list rendering of cards here */}
//             <Card style={{ width: '18rem', display:"inline-block"}}>
//                 <Card.Img variant="top" src={spidey01} />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the bulk of
//                         the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//             <Card style={{ width: '18rem', display:"inline-block" }}>
//                 <Card.Img variant="top" src={spidey02} />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the bulk of
//                         the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//             <Card style={{ width: '18rem', display:"inline-block" }}>
//                 <Card.Img variant="top" src={spidey03} />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the bulk of
//                         the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//         </div>
//     )
// }