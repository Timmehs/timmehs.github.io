import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Post from './Post'
import Blog from './Blog'
import Page from './Page'

const findPost = (routeData, posts) => posts.find(p => p.slug === routeData.match.params.slug)

const Layout = ({ posts, pages }) => (
  <Router>
    <div className="row container">
      <div className="col-md-2 col-xs-12">
        <NavigationBar pages={pages} />
      </div>
      <div className="col-md-8 col-xs-12 main-content">
        <Route exact path="/" render={() => <Blog posts={posts} />} />
        <Route
          path="/posts/:slug"
          render={props => <Post post={findPost(props, posts)} />}
        />
        {/* Build Routes for all non-blog pages */}
        {pages.map(page => (
          <Route
            path={'/' + page.slug}
            key={page.slug}
            render={() => <Page title={page.title} content={page.markdown} />}
          />
        ))}
      </div>
    </div>
  </Router>
)

Layout.propTypes = {
  posts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired
}

export default Layout
