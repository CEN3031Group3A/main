import React, { useState } from 'react';
import Filter from "../../assets/filter.png";
import Add from "../../assets/add_button.png";

import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import GallerySelection from './GallerySelection';
import './Gallery.less'

const Gallery = () => {


    const [filterOptions, setFilterOptions] = useState(false);
    const [posts, setPosts] = useState([]);

    const toggleOptions = () => {
        setFilterOptions(!filterOptions);
    };



    return (
        <div className='container nav-padding'>
            <NavBar />
            <SideBar />
            <div id='join-wrapper'>
                <h1 style={{ color: "#FFFFFF" }}>GALLERY</h1>
                <img onClick={toggleOptions} src={Filter} id='filter' className='filterImage' alt='filter' />
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
                <img src={Add} id='add' className='add-image' alt='add' />
            </div>

            <GallerySelection posts={posts} /> {/* Use GallerySelection component */}
        </div>
    )
};

export default Gallery;