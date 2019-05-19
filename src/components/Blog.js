import React, { Fragment } from 'react'
import PostPreview from './PostPreview'
import PropTypes from 'prop-types'

const Blog = ({ posts }) => (
  <Fragment>
    {posts.map(post => (
      <PostPreview key={post.slug} post={post} />
    ))}
  </Fragment>
)

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Blog
