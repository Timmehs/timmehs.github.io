import React from 'react'

const Post = ({ date, content }) => (
  <article>
    <p className='right'>
      <strong>{date}</strong>
    </p>
    <p className='right'>
      {['mopeds', 'gaming', 'rails', 'react', 'aws'].map(tag => (
        <BlogTag tagName={tag} />
      ))}
    </p>
    <p>
      {content}
    </p>
  </article>
)

export default Post
