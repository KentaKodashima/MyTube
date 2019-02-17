import './ThumbnailItem.css'
import React from 'react'

const ThumbnailItem = ({ thumbnailVideo }) => {
  return (
    <div className="ui card centered video-thumbnail">
      <img 
        className="ui image object-fit-img" 
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