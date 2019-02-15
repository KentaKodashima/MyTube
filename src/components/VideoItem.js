import './VideoItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item video-item" onClick={() => {onVideoSelect(video)}}>
      <Link to={`/detail/${video.id.videoId}`}>
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </Link>
    </div>
  )
}

export default VideoItem