import React from 'react'

const VideoDescription = ({ selectedVideo }) => {

  if (!selectedVideo) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} allowFullScreen />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDescription