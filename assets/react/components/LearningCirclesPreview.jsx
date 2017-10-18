import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BrowseLearningCircles from './BrowseLearningCircles'
import { PREVIEW_LIMIT } from '../constants'
import ApiHelper from '../helpers/ApiHelper'

export default class LearningCirclesPreview extends Component {

  constructor(props) {
    super(props);
    this.state = { learningCircles: [] };
    this.api = new ApiHelper('learningCircles');
    this.populateLearningCircles = () => this._populateLearningCircles();
    this.searchCallback = (response, args) => this._searchCallback(response, args);
    this.populateLearningCircles();
  }

  _populateLearningCircles() {
    const params = {
      active: true,
      signup: 'open',
      limit: PREVIEW_LIMIT
    }

    const opts = { params, callback: this.searchCallback }

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
        <BrowseLearningCircles
          learningCircles={ this.state.learningCircles }
          showStartYourOwn={ false }
        />
      </div>
    );
  }
}

