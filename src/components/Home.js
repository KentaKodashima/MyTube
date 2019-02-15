import React from 'react'
import ThumbnailList from './ThumbnailList'
import VideoList from './VideoList'

const Home = ({ videos, thumbnailVideos, onVideoSelect }) => {
  return (
    <div>
      <ThumbnailList thumbnailVideos={thumbnailVideos} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  )
}

export default Home