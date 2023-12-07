import React, { useState } from 'react';
import Liked from "../../assets/liked.png";
import Unliked from "../../assets/unliked.png";

const LikeButton = ({ post, updatePost }) => {
  const [liked, setLiked] = useState(post.liked);

  // handling the like button click
  const handleLike = () => {
    // toggle the liked state
    const updatedLiked = !liked;
    setLiked(updatedLiked);

    // updated like count based on the new liked state
    const updatedLikeCount = updatedLiked ? post.likes + 1 : post.likes - 1;

    // call the updatePost function to update the post with new liked state and like count
    updatePost(post.id, { ...post, liked: updatedLiked, likes: updatedLikeCount });
  };

  const imageSource = liked ? Liked : Unliked;

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={buttonStyle}>
      <button style={{ 
        width: '40px',
        height: '40px',
        border: 'none',
        backgroundImage: `url(${imageSource})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        cursor: 'pointer'
      }} onClick={handleLike}></button>

      <span style={{ marginLeft: '0px', color: '#fff' }}>{post.likes}</span>
    </div>
  );
};

export default LikeButton;
