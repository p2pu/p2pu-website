import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ApiHelper from '../helpers/ApiHelper'
import NumberWithLabel from './common/NumberWithLabel'

export default class LearningCirclesStats extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.api = new ApiHelper('stats');
    this.populateStats = () => this._populateStats();
    this.populateStats()
  }

  _populateStats() {
    const params = {}
    const callback = (response, options) => {
      this.setState({ stats: response })
    }

    const opts = { params, callback }

    this.api.fetchResource(opts);
  }


  render() {
    if (this.state.stats) {
      return (
        <div className="stacked-numbers">
          <NumberWithLabel number={this.state.stats.active_learning_circles} label='Active learning circles' />
          <NumberWithLabel number={this.state.stats.cities} label='Cities participating globally' />
          <NumberWithLabel number={this.state.stats.facilitators} label='Learning circle facilitators' />
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

