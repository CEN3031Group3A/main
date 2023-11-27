import React, { useState } from 'react';
import Filter from "../../assets/filter.png";
import Add from "../../assets/add_button.png";

import NavBar from "../../components/NavBar/NavBar";
import GallerySelection from './GallerySelection';
import './Gallery.less';
import randomPost from "./Post.js";

const Gallery = () => {


    const [filterOptions, setFilterOptions] = useState(false); // displays toggle for option list
    const [filteredPosts, setFilterPost] = useState([]); // sets the filter for level of posts
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // state to hold the search term

    const toggleOptions = () => {
        setFilterOptions(!filterOptions);
    };

    const handleFilterChange = (type) => {
        const filtered = posts.filter(post => post.level === type);
        setFilterPost(filtered);
    };
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // updates the state with the input from the search bar
    };

    // Implement search functionality as needed
    const handleSearch = () => {
        // Search logic here
    };

    const generateRandomPosts = (count) => {  // generates random posts based on count
        const numPosts = [];
        for (let i = 0; i < count; i++) {
            const randPost = randomPost();
            numPosts.push(randPost);
        }
        return numPosts;
    }

    const generatedPosts = generateRandomPosts(10);
    console.log(generatedPosts)

    return (
        <div className='container nav-padding'>
            <NavBar />
                <h1 style={{ color: "#FFFFFF" }}>GALLERY</h1>
            <div id='task-wrapper'>
                <div id="search-wrapper">
                    <input type="text" className="search-input" placeholder="Search..." />
                </div>
                <img onClick={toggleOptions} src={Filter} id='filter' className='filterImage' alt='filter' />
                {filterOptions && (
                    <div className='option-list'>
                        <h1 className='option-title'>View Options</h1>
                        <label>
                            <input type='checkbox' onChange={() => handleFilterChange('Classroom')} />
                            Classroom
                        </label>
                        <label>
                            <input type='checkbox' onChange={() => handleFilterChange('Organizational')} />
                            Organizational
                        </label>
                        <label>
                            <input type='checkbox' onChange={() => handleFilterChange('Public')} />
                            Public
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