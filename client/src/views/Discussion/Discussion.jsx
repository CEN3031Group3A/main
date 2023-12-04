import React, { useState } from 'react';
import styles from './Discussion.module.less';
import AddButtonImage from "../../assets/add_button.png"; 
import CopyIconImage from "../../assets/copyicon.png"; 
import NavBar from "../../components/NavBar/NavBar";
import LikeButton from "../../components/GalleryCards/likeButton.jsx";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const xmlString = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_for" id="x7nhnn\`0]_k=X*nb3f0t" x="168" y="68"><field name="VAR">i</field><value name="FROM"><block type="math_number" id="lUT03%!){KzHfU~P9{Km"><field name="NUM">0</field></block></value><value name="TO"><block type="math_number" id="jXK:RtA}mlbe\`B_QU*{9"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number" id="AL|)1APss[oDO6*=[BUY"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_flow_statements" id="*sP(z)AE3laH!RnrPjr?"><field name="FLOW">CONTINUE</field></block></statement><next><block type="procedures_ifreturn" id="Fe~}U}p3+2-ew\`o*+vkD"><mutation value="1"></mutation><value name="CONDITION"><block type="logic_boolean" id="d]x(n3[zyJj];g6AiE5@"><field name="BOOL">TRUE</field></block></value><value name="VALUE"><block type="math_number" id=".Ii)j-p(03Wc8MyD?K%S"><field name="NUM">0</field></block></value></block></next></block></xml>`;


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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(xmlString)
      .then(() => {
        console.log('XML string successfully copied to clipboard');
      })
      .catch((err) => {
        console.error('Unable to copy XML string to clipboard', err);
      });
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
              <button onClick={copyToClipboard} className={styles['copy-icon-button']} >
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
