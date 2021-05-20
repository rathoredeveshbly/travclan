import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [post, setPost] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

useEffect(() => {
  const fetchPost = async () =>{
    setloading(true);
    const res = await axios.get('https://intense-tor-76305.herokuapp.com/merchants');
    setPost(res.data);
    setloading(false);
  }

  fetchPost();
}, []);
console.log(post);
  return (
    <div className="App">Hello</div>
  );
}

export default App;
