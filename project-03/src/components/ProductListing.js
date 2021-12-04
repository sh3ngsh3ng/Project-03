import {React, useContext, useEffect, useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import ProductContext from "../context/ProductContext"




export default function ProductListing() {

    const [activeListings, setActiveListings] = useState([])
    const context = useContext(ProductContext)
    
    
    context.getActiveListings().then(res => setActiveListings(res))

    return (
        <div>
            {activeListings.map((listing) => (
                // card
                <Card style={{ width: '18rem', display: "inline-block" }}>
                    <Card.Img variant="top" src={listing.thumbnail_url} />
                    <Card.Body>
                        <Card.Title>{listing.product_name}</Card.Title>
                        <Card.Text>
                            {listing.product_description}
                        </Card.Text>
                        <Button variant="primary">Book Now!</Button>
                    </Card.Body>
                </Card>
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