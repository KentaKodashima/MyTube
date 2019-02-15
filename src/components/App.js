import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import youtube from '../api/youtube'
import history from '../history'
import Header from './Header'
import Home from './Home'
import Detail from './Detail'

class App extends React.Component {
  state = { videos: [], thumbnailVideos: [] }

  componentDidMount() {
    this.onTermSubmit('funny video')
  }

  onTermSubmit = async term => {
    const response = await youtube.get('search', {
      params: {
        q: term
      }
    })

    const allVideos = response.data.items
    const thumbnailArray = []
    thumbnailArray.push(this.fetchRandomThumbnailVideo(allVideos))
    thumbnailArray.push(this.fetchRandomThumbnailVideo(allVideos))

    this.setState({ 
      videos: response.data.items,
      thumbnailVideos: thumbnailArray
    })

    history.push('/')
  }

  fetchRandomThumbnailVideo = (videos) => {
    const randomNum = Math.floor(Math.random() * Math.floor(videos.length))
    const video = videos[randomNum]
    videos.splice(randomNum, 1)

    return video
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { videos, thumbnailVideos } = this.state
    return (
      <div>
        <Router history={history}>
          <div>
            <Header onTermSubmit={this.onTermSubmit} />
            <Switch>
              <div className="ui container">
                <Route 
                  path="/" 
                  exact
                  render={ props => 
                    <Home 
                      videos={videos} 
                      thumbnailVideos={thumbnailVideos} 
                      onVideoSelect={this.onVideoSelect}
                    />} 
                />
                <Route 
                  path="/detail/:id" 
                  exact
                  render={ props => 
                    <Detail 
                      videos={videos} 
                      onVideoSelect={this.onVideoSelect}
                      selectedVideo={this.state.selectedVideo}
                    />}
                />
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App