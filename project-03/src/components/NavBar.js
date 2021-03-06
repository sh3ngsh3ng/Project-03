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
            <Navbar expand={true}>
                <Container>
                    <Navbar.Brand onClick={() => history.push("/")}>
                        <img id="nav-bar-logo" src="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1642524100/lrlymzh1d32dodjmmsgb.png" />
                        {/* <img id="nav-bar-logo" src="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1642524939/wuo6pkolitrvjtjplk82.png" /> */}
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/search"><i class="bi bi-search cart-icon"></i></Nav.Link>
                            {/* <Nav.Link href="/contact-us">Contact Us</Nav.Link> */}
            
                            {checkIfLogin() ?
                                <Nav.Link href={"/cart/" + getUserId()}><i class="bi bi-cart4 cart-icon">{` `}</i></Nav.Link>
                                : null
                            }


                            {checkIfLogin() ?
                                null
                                : <Nav.Link href="/login" onClick={handleClose}><i class="bi bi-box-arrow-in-right cart-icon"></i></Nav.Link>
                            }

                            {checkIfLogin() ?
                                <Nav.Link href="/orders"><i class="bi bi-envelope cart-icon"></i></Nav.Link>
                                :
                                null
                            }

                            {checkIfLogin() ?
                                <Nav.Link onClick={() => handleShow()}><i class="bi bi-box-arrow-right cart-icon"></i></Nav.Link>
                                :
                                null
                            }

                            {/* {checkIfLogin() ?
                                <NavDropdown title={
                                    <span><i id="user-icon"class="bi bi-person-circle"></i></span>
                                } id="basic-nav-dropdown"
                                
                                >
                                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
                                    <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" onClick={() => {
                                        handleShow()
                                    }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                null
                            } */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>
    )
}