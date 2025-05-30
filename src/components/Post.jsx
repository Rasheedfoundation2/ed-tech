import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { usePostContext } from '../context/PostContext';
import '../css/Post.css';

export default function Post({ post }) {
  const [commentText, setCommentText] = useState('');
  const { addComment, toggleLike } = usePostContext();

  const handleComment = () => {
    if (commentText.trim()) {
      addComment(post.id, commentText);
      setCommentText('');
    }
  };

  // Get author and timestamp
  const author = post.author || 'Unknown';
  const timestamp = post.timestamp
    ? new Date(post.timestamp).toLocaleString()
    : new Date().toLocaleString();

  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{author}</strong>
        <span> • {timestamp}</span>
      </div>

      {post.image && <img src={post.image} alt="Post" className="post-image" />}
      <p className="caption">{post.text}</p>

      <div className="post-actions">
        <span onClick={() => toggleLike(post.id)} className="like-icon">
          <FaHeart color="red" /> {post.likes}
        </span>
      </div>

      <div className="comments-section">
        {post.comments.map((c, i) => (
          <div key={i} className="comment">{c}</div>
        ))}
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={handleComment}>Comment</button>
      </div>
    </div>
  );
}
