import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BrowseMeetings from './BrowseMeetings'
import ApiHelper from '../helpers/ApiHelper'

export default class MeetingsPreview extends Component {

  constructor(props) {
    super(props);
    this.state = { meetings: [] };
    this.api = new ApiHelper('landingPage');
    this.populateMeetings = () => this._populateMeetings();
    this.searchCallback = (response, args) => this._searchCallback(response, args);
    this.populateMeetings();
  }

  _populateMeetings() {
    const opts = { parms: {}, callback: this.searchCallback }

    this.api.fetchResource(opts);
  }

  _searchCallback(response, opts) {
    this.setState({ meetings: response.items })
  }

  render() {
    return (
      <div className="preview-container">
        <div className="meetings-section col-xs-12 col-md-8">
          <div className="sub-title">
            <div className="text"><h4>What's On</h4></div>
          </div>
          <BrowseMeetings
            meetings={ this.state.meetings }
          />
        </div>
        <div className="learning-circles-cta col-xs-12 col-md-4">
          <div className="circle">
            <p>Find the right learning circle for you</p>
            <a href="/en/learning-circles" className="btn p2pu-btn light arrow"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

