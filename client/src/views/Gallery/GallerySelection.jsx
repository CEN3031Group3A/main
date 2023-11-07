import React from 'react';
import './GallerySelection.less';

const GallerySelection = ({ posts }) => {
   
    const renderPostOrPlaceholder = () => {
      return posts.length > 0 ? posts.map((post, index) => (
        <div className="col-md-4" key={index}>
          <PostPreview post={post} />
        </div>
      )) : [...Array(6)].map((_, index) => (
        <div className="col-md-4" key={index}>
          <div className="card">
            <div className="card-body">
              <div className="placeholder-content">
                <p>No content available.</p>
              </div>
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
  