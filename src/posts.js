import React, { useState } from "react";
import { Table } from "react-bootstrap";

const heading = {
  width: "15%",
  height: "35",
  borderRadius: "50%",
};

const Posts = ({ posts, loading, toggle, handleSelect }) => {
  
  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="App">
      <Table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Premium</td>
            <td>Bid</td>
          </tr>
          {posts.map((post) => (
            <tr onClick={() => handleSelect(post)} key={post.id}>
              <td>
                <h1>
                  {post.firstname} {post.lastname}
                </h1>{" "}
                <img style={heading} src={post.avatarUrl} />
              </td>
              <td>{post.email}</td>
              <td>{post.phone}</td>
              <td>{post.hasPremium === true ? "Yes" : "No"}</td>
              <td>
                {toggle === true ? (
                  <div>
                    Max :{" "}
                    {post.bids.sort((a, b) => b.amount - a.amount)[0].amount}
                  </div>
                ) : (
                  <div>
                    Min :{" "}
                    {post.bids.sort((a, b) => a.amount - b.amount)[0].amount}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Posts;
