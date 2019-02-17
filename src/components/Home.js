import React from 'react'
import { connect } from 'react-redux'

import ThumbnailList from './ThumbnailList'
import VideoList from './VideoList'

class Home extends React.Component {
  render() {
    const { videos, thumbnailVideos } = this.props

    return (
      <div>
        <ThumbnailList thumbnailVideos={thumbnailVideos} />
        <VideoList videos={videos} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { videos: state.videos }
}

export default connect(mapStateToProps)(Home)