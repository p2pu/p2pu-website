import React from 'react'
import { URL } from 'whatwg-url';

class Subtitle extends React.Component {
  constructor(props) {
    super(props)
    const team = new URL(window.location.href).searchParams.get('team')
    this.state = { team }
  }

  render() {
    if (Boolean(this.state.team)) {
      return (
        <div id="team-title">
          <p className="centered large">Sign up below for a learning circle organized by <span className="team-name">{this.state.team}</span></p>
          <p className="centered small"><a href="/en/learning-circles/">Go to the global learning circles search page</a></p>
        </div>
      )
    }

    return (
      <div id="search-subtitle">
        <p className="centered large">Learning circles are study groups for people who want to take online classes together and in-person. Sign up below for a learning circle in your area, or <a href="https://www.p2pu.org/en/facilitate/">create your own</a>!</p>
      </div>
    )
  }
}

export default Subtitle