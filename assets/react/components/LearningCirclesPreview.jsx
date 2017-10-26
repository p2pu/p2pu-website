import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BrowseLearningCircles from './BrowseLearningCircles'
import ApiHelper from '../helpers/ApiHelper'

export default class LearningCirclesPreview extends Component {

  constructor(props) {
    super(props);
    this.state = { learningCircles: [] };
    this.api = new ApiHelper('landingPage');
    this.populateLearningCircles = () => this._populateLearningCircles();
    this.searchCallback = (response, args) => this._searchCallback(response, args);
    this.populateLearningCircles();
  }

  _populateLearningCircles() {
    const opts = { parms: {}, callback: this.searchCallback }

    this.api.fetchResource(opts);
  }

  _searchCallback(response, opts) {
    this.setState({
      learningCircles: response.items
    })
  }

  render() {
    return (
      <div className="preview-container">
        <div className="sub-title">
          <div className="text"><h4>Upcoming Meetings</h4></div>
        </div>
        <BrowseLearningCircles
          learningCircles={ this.state.learningCircles }
          showStartYourOwn={ false }
        />
        <div className="search-button">
          <a href="/en/learning-circles/">
            <button className="btn p2pu-btn blue">Search All Learning Circles</button>
          </a>
        </div>
      </div>
    );
  }
}

