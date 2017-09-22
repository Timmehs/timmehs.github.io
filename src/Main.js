import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='four columns nav'>
          <h1>Navigation</h1>
        </div>
        <div className='eight columns'>
          <h1>Content</h1>
        </div>
      </div>
    )
  }
}

export default Main
