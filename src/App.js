import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./posts";
import Pagination from "./pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

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
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container m-3">
      <h1>TravClan</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
