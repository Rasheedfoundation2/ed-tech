// context/PostContext.jsx
import React, { createContext, useState, useContext } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    const newPost = { ...post, id: Date.now(), comments: [], likes: 0 };
    setPosts((prev) => [newPost, ...prev]);
  };

  const addComment = (postId, comment) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  const toggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, addComment, toggleLike }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
