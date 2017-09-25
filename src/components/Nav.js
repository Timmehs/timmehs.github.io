import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <h4 className='font-effect-anaglyph brand'>Tim Sandberg</h4>
    <ul>
      <li><Link activeClassName='navlink-active' to="/">Home</Link></li>
      <li><Link activeClassName='navlink-active' to="/blog">Blog</Link></li>
      <li><Link activeClassName='navlink-active' to="/music">Music</Link></li>
      <li><Link activeClassName='navlink-active' to="/links">Links</Link></li>
    </ul>
  </nav>
)

export default Nav
