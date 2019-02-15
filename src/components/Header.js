import React from 'react'

class Header extends React.Component {
  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSUbmit = event => {
    event.preventDefault()

    this.props.onTermSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSUbmit} className="ui form">
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
    )
  }
}

export default Header