import React, { useState } from 'react';
import PostList from '../components/PostList';
import MessagesSidebar from '../components/MessagesSidebar';
import NewPost from '../components/NewPost';
import '../css/LandingPage.css';
import { motion } from 'framer-motion';
import image1 from '../assets/images/courseSlider/and.png'
export default function MainPage() {
  const [posts, setPosts] = useState([
    { id: 1, image: image1, text: 'Sunset in the hills.', comments: [], likes: 0 },
    //{ id: 2, image: 'image2', text: 'Chilling in NYC.', comments: [], likes: 0 },
   // { id: 3, image: 'image3', text: 'Weekend vibes.', comments: [], likes: 0 },
   // { id: 4, image: 'image4', text: 'New café opened!', comments: [], likes: 0 },
    //{ id: 5, image: 'image5', text: 'Exploring nature.', comments: [], likes: 0 }
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <motion.div 
      className="main-container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
    >
      <motion.div className="side-placeholder" />

      <motion.div 
        className="feed-container"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* NewPost is here */}
        <NewPost onAddPost={handleAddPost} />

        {/* PostList gets posts as props */}
        <PostList posts={posts} />
      </motion.div>

      <motion.div 
        className="messages-container"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <MessagesSidebar />
      </motion.div>
    </motion.div>
  );
}
