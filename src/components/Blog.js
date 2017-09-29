import React from 'react'
import BlogTag from './BlogTag'
import Post from './Post'
import posts from '../../assets/blog-manifest.js'

const Blog = () => (
  <div>
    {posts.map(data => <Post {...data} key={data.date} />)}
  </div>
)

export default Blog
