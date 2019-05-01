import React from "react";
import PostPreview from "./PostPreview";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Blog = ({ posts }) => (
  <div>
    {posts.map(post => (
      <p>{JSON.stringify(post, null, 4)}</p>
    ))}
  </div>
);

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};
{
  /* <Link to={post.slug}>
  <PostPreview post={post} key={post.date} />
</Link> */
}

export default Blog;
