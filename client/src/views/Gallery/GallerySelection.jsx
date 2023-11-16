import React from 'react';
import './GallerySelection.less';
import LikeButton from "../../components/GalleryCards/likeButton.jsx";
import SaveButton from "../../components/GalleryCards/saveButton.jsx";
// import PostPreview from "../../components/GalleryCards/postPreview.jsx"; need to implenment this

const GallerySelection = ({ posts }) => {
  const placeholdersCount = 6 - posts.length;

  return (
    <div className="offset-container"> 
      <div className="gallery-container">
        {posts.map((post, index) => (
          <div className="gallery-item" key={`post-${index}`}>
            <PostPreview post={post} />
            <div className="card-footer" style={{ bottom: 2, left: 5 }}>
              <LikeButton />
              <SaveButton />
            </div>
          </div>
        ))}

        {Array.from({ length: placeholdersCount }, (_, index) => (
          <div className="gallery-item placeholder" key={`placeholder-${index}`}>
            <div className="placeholder-content">
              <p>No content available.</p>
            </div>
            <div className="card-footer" style={{ bottom: 2, left: 5 }}>
              <LikeButton />
              <SaveButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySelection;

