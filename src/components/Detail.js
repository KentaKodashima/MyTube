import './Detail.css'
import React from 'react'
import { connect } from 'react-redux'

import VideoDescription from './VideoDescription'
import VideoList from './VideoList'

class Detail extends React.Component {
  state = { isPC: true }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ isPC: window.innerWidth > 960 });
    }, false)
  }

  render() {
    const { videos, selectedVideo } = this.props
    const videoDescriptionClass = this.state.isPC ? 'nine wide column' : 'row'
    const videoListClass = this.state.isPC ? 'seven wide column video-list' : 'row'

    return (
      <div className="ui grid">
        <div className="ui row">
          <div className={`${videoDescriptionClass}`}>
            <VideoDescription selectedVideo={selectedVideo} />
          </div>
          <div className={`${videoListClass}`}>
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedVideo: state.selectedVideo }
}

export default connect(mapStateToProps)(Detail)