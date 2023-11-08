import React from 'react';
import './GallerySelection.less';
import LikeButton from "../../components/GalleryCards/likeButton.jsx";
import SaveButton from "../../components/GalleryCards/saveButton.jsx";


const GallerySelection = ({ posts }) => {
   
    const renderPostOrPlaceholder = () => {
      return posts.length > 0 ? posts.map((post, index) => (
        <div className="col-md-4" key={index}>
          <PostPreview post={post} />
        </div>
      )) : [...Array(6)].map((_, index) => (
        <div className="col-md-4" key={index}>
        <div className="card" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div className="card-body">
            <div className="placeholder-content">
              <p>No content available.</p>
            </div>
          </div>
          <div className="card-footer" style={{ position: 'absolute', bottom: 5, left: 5 }}>
            <LikeButton />
            <SaveButton />
          </div>
        </div>
      </div>
      ));
    };
  
    return (
      <div className="container">
        <div className="row">
          {renderPostOrPlaceholder()}
        </div>
      </div>
    );
  };
  
  export default GallerySelection;
  