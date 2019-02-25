import React from 'react'
import { connect } from 'react-redux'

import ThumbnailList from './ThumbnailList'
import VideoList from './VideoList'

class Home extends React.Component {
  state = { thumbnailVideos: [] }

  componentDidMount() {
    if (this.props.videos.length !== 0) {
      this.setThumbnailVideos()
    }
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props
    if(oldProps.videos !== newProps.videos) {
      this.setThumbnailVideos()
    }
  }

  setThumbnailVideos() {
    const thumbnailVideos = generateRandomThumbnailVideos(this.props.videos)
    this.setState({
      thumbnailVideos: thumbnailVideos
    })
  }

  render() {
    const { videos } = this.props

    return (
      <div>
        <ThumbnailList thumbnailVideos={this.state.thumbnailVideos} />
        <VideoList videos={videos} />
      </div>
    )
  }
}

const generateRandomThumbnailVideos = (videos) => {
  let randomNum1 = Math.floor(Math.random() * Math.floor(videos.length))
  let randomNum2 = Math.floor(Math.random() * Math.floor(videos.length))

  // Avoid using the same videos
  while (randomNum2 === randomNum1) {
    randomNum2 = Math.floor(Math.random() * Math.floor(videos.length))
  }

  const thumbnailVideos = []
  const thumbnailVideoLeft = videos[randomNum1]
  const thumbnailVideoRight = videos[randomNum2]
  thumbnailVideos.push(thumbnailVideoLeft)
  thumbnailVideos.push(thumbnailVideoRight)

  return thumbnailVideos
}

const mapStateToProps = (state, ownProps) => {
  return { videos: state.videos }
}

export default connect(mapStateToProps)(Home)