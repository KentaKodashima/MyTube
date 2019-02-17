import React from 'react'
// import { connect } from 'react-redux'
// import { fetchVideos } from '../actions'

import ThumbnailList from './ThumbnailList'
import VideoList from './VideoList'

class Home extends React.Component {

  render() {
    const { videos, thumbnailVideos, onVideoSelect } = this.props

    return (
      <div>
        <ThumbnailList thumbnailVideos={thumbnailVideos} onVideoSelect={onVideoSelect} />
        <VideoList videos={videos} />
      </div>
    )
  }
}

export default Home