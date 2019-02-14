import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import youtube from '../api/youtube'
import history from '../history'
import Header from './Header'
import Home from './Home'
import Detail from './Detail'

class App extends React.Component {
  state = { videos: [] }

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail/:id" exact component={Detail} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App