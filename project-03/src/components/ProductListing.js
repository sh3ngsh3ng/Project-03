import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {spidey01, spidey02, spidey03} from "../images"

export default function ProductListing() {



    return (
        <div>
            {/* list rendering of cards here */}
            <Card style={{ width: '18rem', display:"inline-block"}}>
                <Card.Img variant="top" src={spidey01} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', display:"inline-block" }}>
                <Card.Img variant="top" src={spidey02} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', display:"inline-block" }}>
                <Card.Img variant="top" src={spidey03} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}