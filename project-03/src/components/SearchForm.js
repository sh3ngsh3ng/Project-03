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

    // const [startDate, setStartDate] = useState(new Date())
    

    const [allTags, setAllTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [nameSearch, setNameSearch] = useState("")
    const [priceFilter, setPriceFilter] = useState(100)

    const context = useContext(ProductContext)


    // fetch all tags to render in search form
    useEffect(async ()=> {
        let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us23.gitpod.io/api/products/tags")
        setAllTags(response.data)
    }, [])

    // click event for tags (set state for tags)
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
                name: nameSearch,
                max_cost: priceFilter
            }
        })
        // set listings to show in ProductListing
        context.setSearchResults(response.data)
        // close OffCanvas
        setShow(false)
        // reset Tags selection
        setSelectedTags([])
    }

    const renderTagsCheckbox = (allTags) => {
        return allTags.map((tag) => {
            let checked = selectedTags
            console.log(checked)
            return (
                <span id="test">
                    <input className="tag-checkbox form-check-input" 
                        type="checkbox" 
                        value={tag[0]} 
                        id={tag[0]} 
                        onChange={selectTagsCheckbox}
                    />
                    <label className="tag-checkbox-label form-check-label" for="flexCheckDefault">
                        {tag[1]}
                    </label>
                </span>
            )
        })
    }


    return (
        <div>
            <div id="search-form-btn-div">
                <Button id="search-form-btn" onClick={handleShow}>
                    <i id="search-btn-icon" class="bi bi-search"></i>
                </Button>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div id="search-form">
                        <div className="search-field-div">
                            <label className="search-form-field-title">Keywords: </label>
                            <input type="text" placeholder="enter keywords..."
                                id="search-form-keywords-input" 
                                onChange={(evt) => setNameSearch(evt.target.value)}
                                value = {nameSearch}
                            />
                        </div>
                        {/* <div>
                            <span>Available Dates: </span><DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </div> */}
                        <div className="search-field-div">
                            <label className="search-form-field-title">Price (below ${priceFilter}):  </label>
                            <input type="range" 
                                    class="form-range" 
                                    min="10" 
                                    max="100" 
                                    step="10"
                                    onChange={(evt) => setPriceFilter(evt.target.value)}
                                    value={priceFilter}
                            />
                        </div>
                        <div className="search-field-div">
                            <label className="search-form-field-title">Tags: </label>
                            {renderTagsCheckbox(allTags)}
                        </div>
                        <div id="search-field-div-btn">
                            <btn id="search-form-submit-btn" className="btn btn-primary" onClick={submitSearchForm}>Search</btn>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )


}