import React, { useState } from 'react';
import Saved from "../../assets/saved.png";
import Unsaved from "../../assets/unsaved.png";

const SaveButton = ({ post, updatePost }) => {
  const [saved, setSaved] = useState(post.saved);

  // handling the save button click
  const handleSave = () => {
    // toggle the saved state
    setSaved(!saved);
    // call the updatePost function to update the post with new liked state and like count
    updatePost(post.id, { ...post, saved: !saved });
  };

  const imageSource = saved ? Saved : Unsaved;

  const buttonStyle = {
    width: '40px',
    height: '40px',
    border: 'none',
    cursor: 'pointer',
    backgroundImage: `url(${imageSource})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
  };

  return (
    <button style={buttonStyle} onClick={handleSave}></button>
  );
};

export default SaveButton;
