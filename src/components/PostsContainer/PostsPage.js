// Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import data from "../../dummy-data"

// import data 

const PostsPage = () => {
  // set up state for your data
  const [count, setCount] = useState(0)
  console.log(data[0].username)
  return (
    <div className="posts-container-wrapper">
      {data.map((post, id) => {
        console.log("post", post)
        return <div key={id}><Post information={post}/></div>
      })}
    </div>
  );
};

export default PostsPage;
