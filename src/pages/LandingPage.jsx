import '../css/LandingPage.css';

//import image1 from '../assets/images/courseSlider/and.png'
// pages/LandingPage.jsx
import React from 'react';
import PostList from '../components/PostList';
import NewPost from '../components/NewPost';
import MessagesSidebar from '../components/MessagesSidebar';
import { usePostContext } from '../context/PostContext';
import { motion } from 'framer-motion';

export default function MainPage() {
  const { posts, addPost } = usePostContext();

  return (
    <motion.div className="main-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="side-placeholder" />
      <motion.div className="feed-container" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <NewPost onAddPost={addPost} />
        <PostList posts={posts} />
      </motion.div>
      <motion.div className="messages-container" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <MessagesSidebar />
      </motion.div>
    </motion.div>
  );
}
