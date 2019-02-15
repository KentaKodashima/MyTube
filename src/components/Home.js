import React from 'react'
import ThumbnailList from './ThumbnailList'
import VideoList from './VideoList'

const Home = ({ videos, thumbnailVideos }) => {
  return (
    <div>
      <ThumbnailList thumbnailVideos={thumbnailVideos} />
      <VideoList videos={videos} />
    </div>
  )
}

export default Home