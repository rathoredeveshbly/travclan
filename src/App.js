import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./posts";
import Pagination from "./pagination";
import BidData from './bidData';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [toggle, setToggle] = useState(true);

  const [selected, setSelected] = useState([]);
  const handleSelect = (obj) => {
console.log(obj)
    setSelected((prevSelected) => [...prevSelected,obj]);
  };
console.log(selected)

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
  console.log(toggle);

  return (
    <div className="container m-3">
      <h3>TravClan</h3>
      <button className="btn btn-primary" onClick={()=>setToggle(false)}>Toggle Bids</button>
      <Posts posts={currentPosts} loading={loading} toggle={toggle} handleSelect={handleSelect}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      <BidData selected={selected} />
    </div>
  );
}

export default App;
