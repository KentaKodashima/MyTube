import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectVideo } from '../actions'

import ThumbnailItem from './ThumbnailItem'

const ThumbnailList = ({ thumbnailVideos, selectVideo }) => {
  const renderedList = thumbnailVideos.map((video) => {
    return (
      <div className="column" key={video.id.videoId} >
        <Link 
          to={`/detail/${video.id.videoId}`}
          onClick={() => selectVideo(video)}
        >
          <ThumbnailItem thumbnailVideo={video} />
        </Link>
      </div>
    )
  })

  return (
    <div className="ui equal width grid">
      <div className="row">
        {renderedList}
      </div>
    </div>
  )
}

export default connect(
  null,
  { selectVideo }
)(ThumbnailList)