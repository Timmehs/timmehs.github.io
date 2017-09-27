import React from 'react'
import BlogTag from './BlogTag'
import Post from './Post'

import { getRawPosts } from '../util/markdown-parser'


const posts = getRawPosts().map(data => <Post date={data.date} content={data.content} />)
const Blog = () => (
  <div>
    {posts}
  </div>
)

export default Blog
