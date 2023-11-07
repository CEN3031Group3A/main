import React, { useState } from 'react';
import Liked from "../../assets/liked.png"; 
import Unliked from "../../assets/unliked.png"; 

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    // this is where we will implement logic to change state of posts for saved/unsaved for filtering
  };

  const imageSource = liked ? Liked : Unliked;

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
    <button style={buttonStyle} onClick={handleLike}></button>
  );
};

export default LikeButton;
