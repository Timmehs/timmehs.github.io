import React from 'react'
import ReactDOM from 'react-dom'
import BlogTag from './BlogTag'
import Markdown from 'markdown-to-jsx'
import formatDate from '../util/dateFormatter'

class Post extends React.Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this)
    const highlight = el => highlightBlock(el)

    node.querySelectorAll('pre code').forEach(el => {
      hljs.highlightBlock(el)
      hljs.lineNumbersBlock(el)
    })
  }
  render() {
    const { date, markdown, tags, title } = this.props;

    return (
      <article>
        <p className='right'>
          <strong>{formatDate(date)}</strong>
        </p>
        <p className='right'>
          {Object.keys(tags).map(tag => (
            <BlogTag tagName={tag} key={tag} />
          ))}
        </p>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    )
  }
}


export default Post
