import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectVideo } from '../actions'

import VideoItem from './VideoItem'

class VideoList extends React.Component { //= ({ videos }) => {

  render() {
    const { videos, selectVideo } = this.props

    const renderedList = videos.map((video) => {
      return (
        <Link 
          to={`/detail/${video.id.videoId}`} 
          key={video.id.videoId} 
          onClick={() => selectVideo(video)} 
        >
          <VideoItem video={video} />
        </Link>
      )
    })

    return (
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { videos: ownProps.videos }
}

export default connect(
  mapStateToProps,
  { selectVideo }
)(VideoList)