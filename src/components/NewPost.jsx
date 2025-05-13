// NewPost.jsx
import React, { useState } from 'react';
import '../css/NewPost.css';
import profileImg from '../assets/react.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImage, FaVideo } from 'react-icons/fa';

export default function NewPost({ onAddPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState('');
  const [caption, setCaption] = useState('');

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(URL.createObjectURL(file));
      setMediaType(type);
      setIsModalOpen(true);
    }
  };

  const handlePost = () => {
    if (media) {
      onAddPost({ image: media, text: caption, comments: [], likes: 0 });
      setMedia(null);
      setCaption('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="new-post-card">
      <div className="new-post-header">
        <img
          src={profileImg}
          className="profile-pic"
        />
        <input className="start-post-input" placeholder="Start a post" readOnly onClick={() => setIsModalOpen(true)} />
      </div>

      <div className="media-options">
        <label className="media-button">
          <FaVideo className="icon video" />
          <span>Video</span>
          <input type="file" accept="video/*" hidden onChange={(e) => handleFileChange(e, 'video')} />
        </label>
        <label className="media-button">
          <FaImage className="icon image" />
          <span>Photo</span>
          <input type="file" accept="image/*" hidden onChange={(e) => handleFileChange(e, 'image')} />
        </label>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="media-modal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {media && (
              <div className="media-preview">
                {mediaType === 'image' ? (
                  <img src={media} alt="preview" />
                ) : (
                  <video controls src={media} />
                )}
              </div>
            )}
            <textarea
              className="caption-input"
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <button className="post-button" onClick={handlePost}>
              Post
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
