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

const generateRandomThumbnailVideos = (videos) => {
  const randomNum1 = Math.floor(Math.random() * Math.floor(videos.length))
  const randomNum2 = Math.floor(Math.random() * Math.floor(videos.length))
  const thumbnailVideos = []
  const thumbnailVideoLeft = videos[randomNum1]
  const thumbnailVideoRight = videos[randomNum2]
  thumbnailVideos.push(thumbnailVideoLeft)
  thumbnailVideos.push(thumbnailVideoRight)

  return thumbnailVideos
}

const mapStateToProps = (state, ownProps) => {
  const thumbnailVideos = generateRandomThumbnailVideos(state.videos)
  return { videos: state.videos, thumbnailVideos: thumbnailVideos }
}

export default connect(mapStateToProps)(Home)