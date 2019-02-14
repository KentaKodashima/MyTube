import React from 'react'
import VideoDescription from './VideoDescription'
import VideoList from './VideoList'

const Detail = () => {
  return (
    <div>
      <VideoDescription className="eleven wide column" />
      <VideoList className="five wide column" />
    </div>
  )
}

export default Detail