import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts } from "./homepageSlice";
import Post from "../../components/Post";

const Homepage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <>
      <h1>Homepage</h1>
      {posts.map(post => (
        <Post key={post.data.id} post={post} />
      ))}
    </>
  )
}

export default Homepage;