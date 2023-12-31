import React from "react";

const BlogPost = ({ post }) => {
  return (
    <div className="right-panel">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
