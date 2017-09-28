import React from 'react'
import BlogTag from './BlogTag'
import Markdown from 'markdown-to-jsx'
import formatDate from '../util/dateFormatter'

const Post = ({ date, markdown, tags, title }) => (
  <article>
    <p className='right'>
      <strong>{formatDate(date)}</strong>
    </p>
    <p className='right'>
      {Object.keys(tags).map(tag => (
        <BlogTag tagName={tag} />
      ))}
    </p>
    <Markdown>
      {markdown}
    </Markdown>
  </article>
)

export default Post
