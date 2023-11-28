import React from 'react';
import './GallerySelection.less';
import LikeButton from "../../components/GalleryCards/likeButton.jsx";
import SaveButton from "../../components/GalleryCards/saveButton.jsx";
import PostPreview from "../../components/GalleryCards/postPreview.jsx";

const GallerySelection = ({ viewPosts}) => {
  return (
    <div className="offset-container"> 
      <div className="gallery-container">
        {viewPosts.map((viewPosts, index) => (
          <div className="gallery-item" key={`post-${index}`}>
              <div className="placeholder">
                  <PostPreview viewPosts={viewPosts} />
                  <div className="card-footer" style={{ bottom: 2, left: 5 }}>
                      <LikeButton />
                      <SaveButton />
                  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySelection;

