import React, { useState } from 'react';
import '../css/Post.css';
import { motion } from 'motion/react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function Post({ post }) {
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);

  const handleComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };
  const handleDeleteComment = (indexToRemove) => {
  setComments(comments.filter((_, i) => i !== indexToRemove));
};


  return (
    <motion.div className="post-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="post-header">
        <strong>Jane Doe</strong>
        <span> • 3h ago</span>
      </div>
      <img src={post.image} alt="Post" className="post-image" />
      <p className="caption">{post.text}</p>
      <div className="post-actions">
        <span onClick={() => setLiked(!liked)} className="like-icon">
          {liked ? <FaHeart color="red" /> : <FaRegHeart />}
        </span>
      </div>
      <div className="comments-section">
        {comments.map((c, i) => (
  <div key={i} className="comment">
    {c}
    <span className="delete-comment" onClick={() => handleDeleteComment(i)}>🗑️</span>
  </div>
))}
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={handleComment}>Comment</button>
      </div>
    </motion.div>
  );
}

