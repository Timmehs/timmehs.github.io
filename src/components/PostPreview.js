import React from "react";
import PropTypes from "prop-types";
import dateFormatter from "util/dateFormatter";

const PostPreview = ({ post }) => (
  <div className="card">
    <div className="card-title">{post.title}</div>
    <div className="card-helper">{dateFormatter(post.date)}</div>
    <div className="card-body">
      {post.tags && (
        <p className="post-tags">
          {post.tags.map(tag => (
            <BlogTag tagName={tag} key={tag} />
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
