import React from 'react'
import { Link } from 'react-router-dom'
import ThumbnailItem from './ThumbnailItem'

const ThumbnailList = ({ thumbnailVideos, onVideoSelect }) => {
  const renderedList = thumbnailVideos.map((video) => {
    return (
      <div className="column" key={video.id.videoId} >
        <Link to={`/detail/${video.id.videoId}`} >
          <ThumbnailItem thumbnailVideo={video} onVideoSelect={onVideoSelect} />
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

export default ThumbnailList