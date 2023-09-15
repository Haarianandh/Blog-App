import React from "react";

const BlogList = ({ posts, onLikeClick, onDeleteClick }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="like-container">
            <span className="like-count">{post.likes}</span>
            <button
              className="like-button"
              onClick={() => onLikeClick(post.id)}
            >
              Like
            </button>
            <h3> </h3>
            <button
              className="delete-button"
              onClick={() => onDeleteClick(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
