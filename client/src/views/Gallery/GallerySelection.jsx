import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GallerySelection.less';
import LikeButton from "../../components/GalleryCards/likeButton.jsx";
import SaveButton from "../../components/GalleryCards/saveButton.jsx";
import PostPreview from "../../components/GalleryCards/PostPreview.jsx";

const GallerySelection = ({ viewPosts, updatePosts }) => {
  const navigate = useNavigate();

  const handleUpdatePost = (updatedPost) => {
    const updatedPosts = viewPosts.map(post => (post.id === updatedPost.id ? updatedPost : post));
    updatePosts([...updatedPosts]);
  };

  const handleGalleryItemClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      return;
    }
    navigate('/discussion');
  };

  return (
    <div className="offset-container"> 
      <div className="gallery-container">
        {viewPosts.map((post, index) => (
          <div
            className="gallery-item"
            key={`post-${index}`}
            onClick={handleGalleryItemClick}
            style={{ cursor: 'pointer' }}>
            <div className="placeholder">
              <PostPreview viewPosts={post} />
              <div className="card-footer" style={{ bottom: 2, left: 5 }}>
                <LikeButton post={post} updatePost={handleUpdatePost} />
                <SaveButton post={post} updatePost={handleUpdatePost} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySelection;
