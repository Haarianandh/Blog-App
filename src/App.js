import React, { useState } from "react";
import "./styles.css";
import BlogList from "./BlogList";
import CreateBlogPost from "./CreateBlogPost";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Food Blog",
      content:
        "Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function.",
      likes: 0
    },
    {
      id: 2,
      title: "Travel Post",
      content:
        "Travel allows us to learn about and experience new places and cultures and can help us grow personally and professionally. Exploring many different places, trying new things, and meeting new people can broaden our perspectives and deepen our understanding of the world. And all of that is the importance of travel.",
      likes: 0
    }
  ]);

  const handleCreatePost = (newPost) => {
    newPost.id = posts.length + 1;
    newPost.likes = 0; // Initialize likes to 0
    setPosts([...posts, newPost]);
  };

  const handleLikeClick = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDeleteClick = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="App">
      <h1>Blog App</h1>
      <div className="content">
        <div className="left-panel">
          <BlogList
            posts={posts}
            onLikeClick={handleLikeClick}
            onDeleteClick={handleDeleteClick}
          />
          <CreateBlogPost onCreate={handleCreatePost} />
        </div>
      </div>
    </div>
  );
}

export default App;
