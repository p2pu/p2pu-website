import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ApiHelper from '../helpers/ApiHelper'
import NumberWithLabel from './common/NumberWithLabel'

export default class LearningCirclesStats extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.api = new ApiHelper('learningCircles');
    this.populateStats = () => this._populateStats();
    this.populateStats()
  }

  _populateStats() {
    const params = { limit: 1 }
    const callback = (response, options) => {
      this.setState({ stats: { active: 45, cities: 31, facilitators: 58 } })
    }

    const opts = { params, callback }

    this.api.fetchResource(opts);
  }


  render() {
    if (this.state.stats) {
      return (
        <div className="stacked-numbers">
          <NumberWithLabel number={this.state.stats.active} label='Active learning circles' />
          <NumberWithLabel number={this.state.stats.cities} label='Cities participating globally' />
          <NumberWithLabel number={this.state.stats.facilitators} label='Learning circle facilitators' />
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

