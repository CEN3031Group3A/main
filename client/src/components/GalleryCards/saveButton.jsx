// SaveButton.jsx
import React, { useState } from 'react';
import Saved from "../../assets/saved.png";
import Unsaved from "../../assets/unsaved.png";

const SaveButton = ({ post, updatePost }) => {
  const [saved, setSaved] = useState(post.saved);

  const handleSave = () => {
    setSaved(!saved);
    console.log(`Post ID ${post.id} Saved: ${!saved}`);
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
