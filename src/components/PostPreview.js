import React from "react";
import PropTypes from "prop-types";
import dateFormatter from "../util/dateFormatter";
import BlogTag from "./BlogTag";
import { Link } from "react-router-dom";

const PostPreview = ({ post }) => (
  <div className="card mb-2">
    <div className="card-body">
      <div className="card-title">
        <h3>
          <Link to={`/posts/${post.slug}`}>{post.title}</Link>
        </h3>
      </div>
      <div className="card-helper">{dateFormatter(post.date)}</div>
      {post.tags && (
        <p className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="blog-tag">
              {tag}
            </span>
          ))}
        </p>
      )}
    </div>
  </div>
);

PostPreview.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostPreview;
