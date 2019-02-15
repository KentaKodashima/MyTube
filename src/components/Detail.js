import './Detail.css'
import React from 'react'
import VideoDescription from './VideoDescription'
import VideoList from './VideoList'

const Detail = ({ videos, onVideoSelect, selectedVideo }) => {
  return (
    <div className="ui grid">
      <div className="ui row">
        <div className="nine wide column">
          <VideoDescription selectedVideo={selectedVideo} />
        </div>
        <div className="seven wide column video-list">
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
      </div>
    </div>
  )
}

export default Detail