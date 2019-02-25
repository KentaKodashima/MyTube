import './ThumbnailList.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectVideo } from '../actions'

import ThumbnailItem from './ThumbnailItem'

class ThumbnailList extends React.Component {
  state = { isPC: true }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ isPC: window.innerWidth > 960 });
    }, false)

    this.setState({
      isPC: window.innerWidth > 960
    })
  }

  render() {
    const { thumbnailVideos, selectVideo } = this.props
    const thumbnailListClass = this.state.isPC ? 'row thumbnail-list' : 'thumbnail-list'
    const thumbnailItemClass = this.state.isPC ? 'column' : 'row thumbnail-item'

    const renderedList = thumbnailVideos.map((video) => {
      return (
        <div className={`${thumbnailItemClass}`} key={video.id.videoId} >
          <Link 
            to={`/detail/${video.id.videoId}`}
            onClick={() => selectVideo(video)}
          >
            <ThumbnailItem thumbnailVideo={video} />
          </Link>
        </div>
      )
    })

    return (
      <div className="ui equal width grid">
        <div className={`${thumbnailListClass}`}>
          {renderedList}
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { selectVideo }
)(ThumbnailList)