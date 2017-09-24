import React from 'react'
import Nav from './components/Nav'
import Blog from './components/Blog'

class Main extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-3 col-xs-12'>
          <Nav />
        </div>

        <div className='col-md-9 col-xs-12'>
          <Blog />
        </div>
      </div>
    )
  }
}

export default Main
