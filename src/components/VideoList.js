import React from 'react'
import { Link } from 'react-router-dom'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <Link to={`/detail/${video.id.videoId}`} key={video.id.videoId} >
        <VideoItem video={video} onVideoSelect={onVideoSelect} />
      </Link>
    )
  })

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
}

export default VideoList