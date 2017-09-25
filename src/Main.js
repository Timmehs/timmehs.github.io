import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Blog from './components/Blog'
import Links from './components/Links'
import Music from './components/Music'

const Main = () => (
  <Router >
    <div className='row'>
      <div className='col-md-3 col-xs-12'>
        <Nav />
      </div>

      <div className='col-md-9 col-xs-12 main-content'>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog}/>
        <Route path="/music" component={Music} />
        <Route path="/links" component={Links} />
      </div>
    </div>
  </Router>
)

export default Main
