import React from 'react'

const ThumbnailItem = ({ thumbnailVideo }) => {
  return (
    <div className="ui card centered">
      <img 
        className="ui image" 
        src={thumbnailVideo.snippet.thumbnails.medium.url} 
        alt={thumbnailVideo.snippet.title} 
      />
      <div className="content">
        <div className="header">{thumbnailVideo.snippet.title}</div>
      </div>
    </div>
  )
}

export default ThumbnailItem