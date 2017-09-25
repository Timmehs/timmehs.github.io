import React from 'react'
import Nav from './Nav'

class Layout extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-3 col-xs-12'>
          <Nav />
        </div>
        <div className='col-md-9 col-xs-12'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
