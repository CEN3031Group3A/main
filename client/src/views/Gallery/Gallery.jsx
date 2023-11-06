import React, { useState } from 'react';
import Filter from "../../assets/filter.png";
import Add from "../../assets/add_button.png";

import NavBar from "../../components/NavBar/NavBar";
import './Gallery.less'

const Gallery = () => {

    const [filterOptions, setFilterOptions] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // state to hold the search term

    const toggleOptions = () => {
        setFilterOptions(!filterOptions);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // updates the state with the input from the search bar
    };

    // Implement search functionality as needed
    const handleSearch = () => {
        // Search logic here
    };
    return (
        <div className='container nav-padding'>
        <NavBar />
        <div id='gallery-title'>
          <h1 style={{color:"#FFFFFF"}}>GALLERY</h1>
        </div>
        <div id='join-wrapper'>
          <div id="search-wrapper">
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
          <img onClick={toggleOptions} src={Filter} className='filterImage' alt='filter'/>
          {filterOptions && (
            <div className='option-list'>
                        <h1 className='option-title'>View Options</h1>
                        <label>
                            <input type='checkbox' />Classroom
                        </label>
                        <label>
                            <input type='checkbox' />Organizational
                        </label>
                        <label>
                            <input type='checkbox' />Public
                        </label>
                    </div>
                )}
                
                <img src={Add} id='add' className='add-image' alt='add'/>
            </div>
        </div> 
    )
};

export default Gallery;

