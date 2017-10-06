import React from 'react'
import ReactDOM from 'react-dom'
import BlogTag from './BlogTag'
import Markdown from 'markdown-to-jsx'
import formatDate from '../util/dateFormatter'

class Post extends React.Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this)
    const highlight = el => highlightBlock(el)

    node.querySelectorAll('pre').forEach(el => {
      hljs.highlightBlock(el)
      hljs.lineNumbersBlock(el, { singleLine: true })
    })
  }
  render() {
    const { post } = this.props;
    const headerImage = {
      backgroundImage: `url(${post.get('header')})`
    }
    return (
      <article className='post-body'>
        <header className='left'>
          <h2 className='post-body-title'>{post.get('title')}</h2>
          <strong className='post-date'>{formatDate(post.get('date'))}</strong>
        </header>
        <p className='post-tags'>
          {post.get('tags').keySeq().map(tag => (
            <BlogTag tagName={tag} key={tag} />
          ))}
        </p>
        <div className='post-header-image' style={headerImage} />
        <Markdown>
          {post.get('markdown')}
        </Markdown>
      </article>
    )
  }
}


export default Post
