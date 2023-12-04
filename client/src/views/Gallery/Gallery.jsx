import React, { useState } from 'react';
import Filter from "../../assets/filter.png";
import Add from "../../assets/add_button.png";

import NavBar from "../../components/NavBar/NavBar";
import GallerySelection from './GallerySelection';
import './Gallery.less';
import randomPost from "./Post.js";

const Gallery = () => {
    const [filterOptions, setFilterOptions] = useState(false); // displays toggle for option list
    const [filterPost, setFilterPost] = useState([]); // sets the filter for level of posts
    const [searchPost, setSearchPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // state to hold the search term
    const [matchedPosts, setMatchedPosts] = useState([]); // state to hold matched posts for the dropdown

    const toggleOptions = () => {
        setFilterOptions(!filterOptions);
    };

    const handleFilterChange = (type) => {
        const filtered = posts.filter(post => post.level === type);
        if (filtered) { // filter option matches type
            setFilterPost(filtered);
        }
        else {
            setFilterPost([]);
        }
    };
    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        if (searchTerm === '') {
            setMatchedPosts([]);
            setSearchPost([]);
        } else {
            // Filter posts by checking both first and last names and project title
            const matched = posts.filter(post =>
                post.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setMatchedPosts(matched);
            setSearchPost(matched); // Update the main gallery view
        }
    };

    const highlightText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} className="highlight">
                            {part}
                        </span>
                    ) : (
                        part
                    )
                )}
            </span>
        );
    };



    const setRandomPost = () => {
        const newPost = randomPost();
        setPosts(prevState => [...prevState, newPost])
    }
    console.log(posts)

    return (
        <div className='container nav-padding'>
            <NavBar />
            <h1 style={{ color: "#FFFFFF" }}>GALLERY</h1>
            <div id='task-wrapper'>
                <div id="search-wrapper">
                    <input
                        type="text"
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    {matchedPosts.length > 0 && searchTerm && (
                        <div className="dropdown">
                            {matchedPosts.slice(0, 5).map(post => (
                                <div key={post.id} className="dropdown-item">
                                    {highlightText(post.projectTitle, searchTerm)} -{' '}
                                    {highlightText(`${post.firstName} ${post.lastName}`, searchTerm)}
                                </div>
                            ))}
                        </div>
                    )}




                </div>
                <img onClick={toggleOptions} src={Filter} id='filter' className='filterImage' alt='filter' style={{ cursor: 'pointer' }} />
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
                <img onClick={setRandomPost} src={Add} id='add' className='add-image' alt='add' style={{ cursor: 'pointer' }} />
            </div>
            <GallerySelection viewPosts={searchTerm.length > 0 ? searchPost : (filterPost.length > 0 ? filterPost : posts)} />
        </div>
    )
};

export default Gallery;