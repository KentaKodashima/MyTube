import React from 'react'
import ThumbnailItem from './ThumbnailItem'

const ThumbnailList = ({ thumbnailVideos }) => {
  const renderedList = thumbnailVideos.map((video) => {
    return (
      <div className="column">
        <ThumbnailItem key={video.id.videoId} thumbnailVideo={video} />
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