import React, { useState } from "react";

const CreateBlogPost = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = () => {
    if (title && content) {
      onCreate({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleCreate}>Create Post</button>
    </div>
  );
};

export default CreateBlogPost;
