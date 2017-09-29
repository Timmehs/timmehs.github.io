import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <h2 className='font-effect-anaglyph brand'>Tim Sandberg</h2>
    <ul>
      <li><NavLink exact activeClassName='navlink-active' to="/">Blog</NavLink></li>
      <li><NavLink exact activeClassName='navlink-active' to="/music">Music</NavLink></li>
      <li><NavLink exact activeClassName='navlink-active' to="/links">Links</NavLink></li>
    </ul>
  </nav>
)

export default Nav
