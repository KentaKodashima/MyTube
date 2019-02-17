import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVideos } from '../actions'

import history from '../history'
import Header from './Header'
import Home from './Home'
import Detail from './Detail'
import ThumbnailList from './ThumbnailList';

class App extends React.Component {
  state = { videos: [], thumbnailVideos: [] }

  componentDidMount() {
    if (!this.props.videos) {
      this.props.fetchVideos('vancouver')
    }
  }

  onTermSubmit = async term => {
    this.props.fetchVideos(term)

    history.push('/')
  }

  render() {
    const { thumbnailVideos } = this.state
    return (
      <div>
        <Router history={history}>
          <div>
            <Header onTermSubmit={this.onTermSubmit} />
            <Switch>
              <div className="ui container">
                <Route path="/" exact component={Home} />
                <Route path="/detail/:id" component={Detail} />
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { videos: state.videos }
}

export default connect(
  mapStateToProps, 
  { fetchVideos }
)(App)