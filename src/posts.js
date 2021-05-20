import React from "react";
import { Table } from "react-bootstrap";

const heading = {
  width: "15%",
  height: "35",
  borderRadius: "50%",
};

const Posts = ({ posts, loading }) => {
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
            <td>Max/Min bid</td>
          </tr>
          {posts.map((post) => (
            <tr key={post.id}>
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
                {post.bids.reduce((a, c) => {
                  if (a.amount > c.amount) {
                    return a.amount;
                  } else {
                    return c.amount;
                  }
                }, 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Posts;
