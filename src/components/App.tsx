import React from 'react'
import Header from './Header'
import VideoList from './VideoList'

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <VideoList />
      </div>
    )
  }
}

export default App