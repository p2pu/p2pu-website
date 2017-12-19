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
          <div className="col-sm-12 col-md-4 card">
            <i className="material-icons">group</i>
            <h4 className="bold">
              <NumberWithLabel number={this.state.stats.active_learning_circles} label='active learning circles' />
              </h4>
            <p>Learning circles meet in person once a week to study together.</p>
          </div>
          <div className="col-sm-12 col-md-4 card">
            <i className="material-icons">computer</i>
            <h4 className="bold">
              <NumberWithLabel number={this.state.stats.facilitators} label='online course options' />
            </h4>
            <p>The learning circle facilitator chooses a course for the group to study.</p>
          </div>
          <div className="col-sm-12 col-md-4 card">
            <i className="material-icons">pin_drop</i>
            <h4 className="bold">
              <NumberWithLabel number={this.state.stats.cities} label='cities participating globally' />
            </h4>
            <p>Learning circles meet locally, in places like a library or community center.</p>
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

