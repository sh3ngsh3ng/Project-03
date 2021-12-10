import {React, useState} from 'react'
import {Button, Offcanvas} from 'react-bootstrap'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [startDate, setStartDate] = useState(new Date())
    console.log(startDate)

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                <i class="bi bi-search"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <input type="text" placeholder="type something here"/>
                    </div>
                    <div>
                        <span>From: </span><DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </div>
                    <div>
                        <input type="range" class="form-range" min="0" max="5" step="1"/>
                    </div>
                    <div>
                        get all tags and list render
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )


}