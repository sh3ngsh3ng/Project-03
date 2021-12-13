import { React, useState } from 'react'
import { useHistory } from "react-router-dom"
import { Navbar, NavDropdown, Nav, Container, Offcanvas } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { checkIfLogin, getUserId } from '../pages/utils'
import { brandLogo2 } from '../images'
import { motion } from 'framer-motion'

export default function NavBar() {

    let history = useHistory()

    const logoutUser = () => {
        localStorage.removeItem("accessToken")
        history.push("/login")
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <motion.div 
                    animate={{y:0}}
                    initial={{y:"-100%"}}
                    transition={{
                        type:"spring",
                        stiffness: 50,
                        delay: 0.02
                    }}
        >
            <Offcanvas id="logout-confirmation-box" show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h1 id="logout-confirmation-text">Do you want to logout?</h1>
                    <div id="logout-btns-div">
                        <button className="btn btn-danger logout-btns" onClick={handleClose}>No</button>
                        <button className="btn btn-success logout-btns" onClick={() => {
                            logoutUser()
                            handleClose()
                        }}>Yes</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img id="nav-bar-logo" src={brandLogo2} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/contact-us">Contact Us</Nav.Link> */}
                            <Nav.Link href={checkIfLogin() ? "/logout" : "/login"}></Nav.Link>


                            {checkIfLogin() ?
                                <Nav.Link href={"/cart/" + getUserId()}><i id="cart-icon" class="bi bi-cart4">{` `}</i></Nav.Link>
                                : null
                            }


                            {checkIfLogin() ?
                                null
                                : <Nav.Link href="/login" onClick={handleClose}>Sign In</Nav.Link>
                            }



                            {checkIfLogin() ?
                                <NavDropdown title={
                                    <span><i id="user-icon"class="bi bi-person-circle"></i></span>
                                } id="basic-nav-dropdown">
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
        </motion.div>
    )
}