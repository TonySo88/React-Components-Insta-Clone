// You do not need to change any code in this file

import React from "react";
import "./Posts.css";

const PostHeader = props => {
  console.log("header", props)
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.data.thumbnailUrl}
        />
      </div>
      <h2>{props.data.username}</h2>
    </div>
  );
};

export default PostHeader;
