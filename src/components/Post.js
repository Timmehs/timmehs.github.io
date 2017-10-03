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
      hljs.lineNumbersBlock(el)
    })
  }
  render() {
    const { date, markdown, tags, title } = this.props;

    return (
      <article className='post-body'>
        <header className='left'>
          <h2 className='post-body-title'>{title}</h2>
          <strong className='post-date'>{formatDate(date)}</strong>
        </header>
        <p className='post-tags'>
          {Object.keys(tags).map(tag => (
            <BlogTag tagName={tag} key={tag} />
          ))}
        </p>
        <div className='post-header-image' />
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    )
  }
}


export default Post
