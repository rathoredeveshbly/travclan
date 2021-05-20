import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="container">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <div className="col-4">
            <img className="card-img-top mt-1" src={post.avatarUrl} />
          </div>
          <div className="col-4">
            <h2>
              {post.firstname} {post.lastname}
            </h2>
          </div>
          <div className="col-4 m-1">
            Max Bid : {post.bids.reduce((a, c) => {
              if (a.amount > c.amount) {
                return a.amount;
              } else {
                return c.amount;
              }
            }, 0)}
           <br/> <button onClick={}>Toggle the Bid</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
