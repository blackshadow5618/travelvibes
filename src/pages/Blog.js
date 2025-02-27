import React from "react";
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h2>Blog Posts</h2>
      <div className="blog-posts">
        <div className="post">
          <h3>Exploring Bangkok</h3>
          <p>Discover the vibrant streets and rich culture of Bangkok.</p>
        </div>
        <div className="post">
          <h3>Island Hopping in Phuket</h3>
          <p>Experience the beauty of Phuket's islands.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
