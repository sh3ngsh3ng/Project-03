import {React, useEffect, useState, useContext} from 'react'
import {Button, Offcanvas} from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import ProductContext from "../context/ProductContext"
import Select from "react-select"
import makeAnimated from "react-select/animated"

export default function SearchForm() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [startDate, setStartDate] = useState(new Date())
    

    const [allTags, setAllTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [roomType, setRoomType] = useState("")
    const [playTime, setPlayTime] = useState([])
    const [nameSearch, setNameSearch] = useState("")
    const [priceFilter, setPriceFilter] = useState(100)

    const context = useContext(ProductContext)


    // fetch all tags to render in search form
    useEffect(async ()=> {
        let response = await axios.get("https://project-03-virtual-rooms.herokuapp.com/api/products/tags")
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
        let editedPlayTime = playTime.map(obj => obj.value) // onkly the value
        let response = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/products/search", {
            params: {
                tags: selectedTags,
                name: nameSearch,
                max_cost: priceFilter,
                room_type: roomType,
                play_time: editedPlayTime
            }
        })
        // set listings to show in ProductListing
        context.setSearchResults(response.data)
        // close OffCanvas
        setShow(false)
        // reset Tags selection
        setSelectedTags([])
        setPlayTime([])
        setRoomType("")
    }

    const renderTagsCheckbox = (allTags) => {
        return allTags.map((tag) => {
            let checked = selectedTags
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

    // play time select options
    let playTimeOptions = [ 
                            {value: 0, label: 'All'},
                            {value: 30, label: '30 mins'}, 
                            {value: 45, label: '45 mins'}, 
                            {value: 60, label: '1 hour'},
                            {value: 90, label: '1 hour 30 mins'},
                            {value: 120, label: '2 hours'},
                            ]
    let roomTypeOptions = [
                            {value: 'all', label: 'All Room Type'},
                            {value: 'escape_room', label: 'Escape Room'},
                            {value: 'mystery_murder', label: 'Mystery Murder'},
                            {value: 'amazing_race', label: "Amazing Race"}
                            ]

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
                        <div className="search-field-div">
                            <label className="search-form-field-title">Room Type: </label>
                            <Select options={roomTypeOptions} value={roomTypeOptions.filter((opt) => opt.value === roomType)} onChange={(evt) => setRoomType(evt.value)}/>
                        </div>
                        <div className="search-field-div">
                            <label className="search-form-field-title">Play Time: </label>
                            <Select isMulti components={makeAnimated()} value={playTime} options={playTimeOptions} onChange={(evt) => setPlayTime(evt)}/>
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
                            <btn id="search-form-submit-btn" className="btn btn-primary" onClick={() => submitSearchForm()}>Search</btn>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )


}