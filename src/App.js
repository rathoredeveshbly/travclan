import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postssPerPage, setPostssPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const res = await axios.get(
        "https://intense-tor-76305.herokuapp.com/merchants"
      );
      setPosts(res.data);
      setloading(false);
    };

    fetchPosts();  
  }, []);
  console.log(posts);
  return (
    <div className="container m-3">
      <h1>TravClan</h1>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
