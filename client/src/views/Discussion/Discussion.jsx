import React, { useState } from 'react';
import styles from './Discussion.module.less';
import AddButtonImage from "../../assets/add_button.png"; 
import CopyIconImage from "../../assets/copyicon.png"; 
import NavBar from "../../components/NavBar/NavBar";
import LikeButton from "../../components/GalleryCards/likeButton.jsx";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      addComment();
    }
  };

  return (
    <div>
      <NavBar />
      <div className={styles['discussion-container']}>
        <div className={styles['work-area']}>
          {/* xml file for user work goes here for display*/}
        </div>

        <div className={styles['discussion-board-container']}>
          <div id={styles['task-wrapper']}>
            <div id={styles['comments']}>
              {comments.map((comment, index) => (
                <div key={index} className={styles['comment']}>
                  <p>{comment}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['add-comment-container']}>
            <div id={styles['add-comment']}>
              <textarea
                value={newComment}
                onChange={handleCommentChange}
                onKeyPress={handleKeyPress}
              />
            
              <button onClick={addComment} className={styles['add-image']} title='Add Comment'>
                <img src={AddButtonImage} alt='Add Comment' />
              </button>
              <button onClick={addComment} className={styles['copy-icon-button']} >
                <img src={CopyIconImage} alt='Add Comment' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
