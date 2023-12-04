import React from 'react';
import '../../views/Gallery/GallerySelection.less';

const PostPreview = ({ viewPosts }) => {
    return (
        <div>
            <div className="post-details">
                <p style={{ color: "#FFFFFF" }}>
                    <span className="project-title">{viewPosts.projectTitle}</span><br />
                    <span>by </span>{`${viewPosts.firstName} ${viewPosts.lastName}`}
                </p>
            </div>
            <div className="emoji">{viewPosts.image}</div>
        </div>
    );
};

export default PostPreview;
