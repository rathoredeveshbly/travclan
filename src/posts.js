import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <ul className="list-group">
      {posts.map(post => (
        <li className="list-group-item" key={post.id}>
          {post.firstname}
          {post.lastname}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
