import React from "react";

const Post = ({post}) => {
  const { title } = post.data;
  
  return (
    <div>
      <h2>{title}</h2>
      {post.data.thumbnail !== "default" && <img src={post.data.thumbnail} />}
    </div>
  )
}

export default Post;