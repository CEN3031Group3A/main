import React from 'react';
import '../../views/Gallery/GallerySelection.less';

const PostPreview = ({ post }) => {
    return (
        <div>
            <div className="post-details">
                <p style={{color: "#FFFFFF"}}>{`${post.firstName} ${post.lastName}`}</p>
            </div>
            <div className="emoji">{post.image}</div>
        </div>
    );
};
export default PostPreview;
