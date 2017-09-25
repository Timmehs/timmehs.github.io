import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <h4 className='font-effect-anaglyph brand'>Tim Sandberg</h4>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/music">Music</Link></li>
      <li><Link to="/links">Links</Link></li>
    </ul>
  </nav>
)

export default Nav
