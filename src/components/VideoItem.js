import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video }) => {
  return (
    <div className="item video-item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="content video-item-body">
        <div className="header video-title">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem