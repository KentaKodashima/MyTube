import './App.css'
import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVideos } from '../actions'

import history from '../history'
import Header from './Header'
import Home from './Home'
import Detail from './Detail'

class App extends React.Component {
  componentDidMount() {
    if (this.props.videos.length === 0) {
      this.props.fetchVideos('vancouver')
    }
  }

  onTermSubmit = async term => {
    this.props.fetchVideos(term)

    history.push('/')
  }

  render() {
    if (!this.props.videos) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Router history={history}>
          <div>
            <Header onTermSubmit={this.onTermSubmit} />
            <div className="main-wrapper">
              <div className="ui container">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/detail/:id" component={Detail} />
                </Switch>
              </div>
            </div>
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