import React from 'react'
import BlogTag from './BlogTag'
import Post from './Post'
import posts from '../../assets/blog-manifest.js'
import somePost from '../posts/2017-09-27T17:37:58Z.md'


const Blog = () => (
  <div>
    {posts.map(data => <Post {...data} key={data.date} />)}
  </div>
)

export default Blog
