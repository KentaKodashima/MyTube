import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSUbmit = event => {
    event.preventDefault()

    this.props.onTermSubmit(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <div className="ui segment" style={{ marginBottom: 0 }}>
        <div className="ui secondary menu">
          <div className="item">
            <Link to="/">
              MyTube
            </Link>
          </div>
          <form onSubmit={this.onFormSUbmit} className="ui form search-bar">
            <div className="field">
              <input 
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
                placeholder="Search for videos..."
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Header