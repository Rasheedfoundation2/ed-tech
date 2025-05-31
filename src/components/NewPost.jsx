
import React, { useState } from 'react';
import '../css/NewPost.css';
import profileImg from '../assets/react.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImage, FaRegFileAlt } from 'react-icons/fa'; // ✅ use page icon

export default function NewPost({ onAddPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState('');
  const [caption, setCaption] = useState('');
  const [isTextOnly, setIsTextOnly] = useState(false);

  const role = localStorage.getItem("userRole") || "Unknown";
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(URL.createObjectURL(file));
      setMediaType(type);
      setIsTextOnly(false); // it's a media post
      setIsModalOpen(true);
    }
  };

  const handleTextOnlyClick = () => {
    setMedia(null);
    setMediaType('');
    setIsTextOnly(true); // ✅ text-only flag
    setIsModalOpen(true);
  };

  const handlePost = () => {
    if (caption.trim() !== '') {
      onAddPost({
         id: Date.now(), // 🔐 needed for unique tracking
  author: role,
  image: media,
  text: caption,
  timestamp: new Date().toISOString(),
  mediaType: mediaType || (isTextOnly ? 'text' : null),
  comments: [],
  likes: 0
      });
      setMedia(null);
      setCaption('');
      setIsTextOnly(false);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="new-post-card">
      <div className="new-post-header-inline">
        <img src={profileImg} className="profile-pic small" alt="User" />
       

        <div className="media-buttons-inline">
        <label className="media-button">
          <FaRegFileAlt className="icon write" />
          <span>Write</span>
          <input hidden onClick={handleTextOnlyClick} />
        </label>

        <label className="media-button">
          <FaImage className="icon image" />
          <span>Photo</span>
          <input type="file" accept="image/*" hidden onChange={(e) => handleFileChange(e, 'image')} />
        </label>
      </div>
    </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="media-modal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {media && mediaType === 'image' && (
              <div className="media-preview">
                <img src={media} alt="preview" />
              </div>
            )}

            <textarea
              className="caption-input"
              placeholder="Write something...."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <button className="post-button" onClick={handlePost}>Post</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
