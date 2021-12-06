import {React, useState} from 'react'
import { Navbar, NavDropdown, Nav, Container, Offcanvas} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { checkIfLogin, getUserId } from '../pages/utils'
import { useHistory } from 'react-router'
import { brandLogo, brandLogo2 } from '../images'

export default function NavBar() {

    let history = useHistory()

    const logoutUser = () => {
        localStorage.removeItem("accessToken")
        history.push("/")
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h1>Do you want to logout?</h1>
                    <button className="btn btn-success" onClick={() => {
                        logoutUser()
                        handleClose()
                    }}>Yes</button>
                    <button className="btn btn-danger" onClick={handleClose}>No</button>
                </Offcanvas.Body>
            </Offcanvas>
            <Navbar bg="secondary" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img id="nav-bar-logo"src={brandLogo2}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/contact-us">Contact Us</Nav.Link> */}
                            <Nav.Link href={checkIfLogin() ? "/logout" : "/login"}></Nav.Link>



                            {checkIfLogin() ?
                                <Nav.Link href={"/cart/" + getUserId()}>Cart</Nav.Link>
                                : null
                            }


                            {checkIfLogin() ?
                                null
                                : <Nav.Link href="/login">Sign In</Nav.Link>
                            }



                            {checkIfLogin() ?
                                <NavDropdown title="UserIconHere" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" onClick={() => {
                                        handleShow()
                                    }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                null
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}