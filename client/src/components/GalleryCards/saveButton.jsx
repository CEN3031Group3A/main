import React, { useState } from 'react';
import Saved from "../../assets/saved.png"; 
import Unsaved from "../../assets/unsaved.png"; 

const SaveButton = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    // this is where we will implement logic to change state of posts for liked/unliked for filtering
  };

  const imageSource = saved ? Saved : Unsaved;

  const buttonStyle = {
    width: '40px',
    height: '40px',
    border: 'none',
    cursor: 'pointer',
    backgroundImage: `url(${imageSource})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <button style={buttonStyle} onClick={handleSave}></button>
  );
};

export default SaveButton;
