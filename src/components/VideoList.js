import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectVideo } from '../actions'

import VideoItem from './VideoItem'

class VideoList extends React.Component {
  render() {
    const { videos, selectVideo } = this.props

    const renderedList = videos.map((video) => {
      // video.id.videoId is not unique
      const key = video.etag

      return (
        <Link
          to={`/detail/${key}`} 
          key={key}
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