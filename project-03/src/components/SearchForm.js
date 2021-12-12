import {React, useEffect, useState, useContext} from 'react'
import {Button, Offcanvas} from 'react-bootstrap'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import ProductContext from "../context/ProductContext"


export default function SearchForm() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    

    const [allTags, setAllTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [nameSearch, setNameSearch] = useState("")

    const context = useContext(ProductContext)


    // fetch all tags to render in search form
    useEffect(async ()=> {
        let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us23.gitpod.io/api/products/tags")
        setAllTags(response.data)
    }, [])

    // click event for tags
    const selectTagsCheckbox = (evt) => {
        // check if in the array
        if (selectedTags.includes(evt.target.value)) {
            let clone = selectedTags.filter((element) => {
                return element !== evt.target.value
            })
            setSelectedTags(clone)
        } else {
            let clone = selectedTags
            clone.push(evt.target.value)
            setSelectedTags(clone)
        }
    }

    // event to submit form
    const submitSearchForm = async () => {
        let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us23.gitpod.io/api/products/search", {
            params: {
                tags: selectedTags,
                name: nameSearch
            }
        })
        // set listings to show in ProductListing
        context.setSearchResults(response.data)
        // close OffCanvas
        setShow(false)
        // reset Tags selection
        setSelectedTags([])
        // reset text
        setNameSearch("")
    }

    const renderTagsCheckbox = (allTags) => {
        return allTags.map((tag) => {
            return (
                <span>
                    <input className="form-check-input" type="checkbox" value={tag[0]} id={tag[0]} onChange={selectTagsCheckbox}/>
                    <label className="form-check-label" for="flexCheckDefault">
                        {tag[1]}
                    </label>
                </span>
            )
        })
    }


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
                        <input type="text" placeholder="type something here" onChange={(evt) => setNameSearch(evt.target.value)}/>
                    </div>
                    <div>
                        <span>From: </span><DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                        <span>To: </span><DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
                    </div>
                    <div>
                        <label>Price: </label>
                        <input type="range" class="form-range" min="0" max="5" step="1"/>
                    </div>
                    <div>
                        {renderTagsCheckbox(allTags)}
                    </div>
                    <div>
                        <btn className="btn btn-primary" onClick={submitSearchForm}>Search</btn>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )


}