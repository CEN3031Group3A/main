// LikeButton.jsx
import React, { useState } from 'react';
import Liked from "../../assets/liked.png";
import Unliked from "../../assets/unliked.png";

const LikeButton = ({ post, updatePost }) => {
  const [liked, setLiked] = useState(post.liked);

  const handleLike = () => {
    const updatedLiked = !liked;
    setLiked(updatedLiked);

    const updatedLikeCount = updatedLiked ? post.likes + 1 : post.likes - 1;

    console.log(`Post ID ${post.id} Liked: ${updatedLiked}`);
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
      <button style={{ width: '40px', height: '40px', border: 'none', backgroundImage: `url(${imageSource})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: 'transparent' }} onClick={handleLike}></button>
      <span style={{ marginLeft: '8px', color: '#555' }}>{post.likes}</span>
    </div>
  );
};

export default LikeButton;
