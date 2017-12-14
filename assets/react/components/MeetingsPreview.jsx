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
      <div className="container">
        <div className="preview-container">
          <div className="meetings-section col-xs-12">
            <header>
              <div class="subtitle">
                <div class="underline">
                  <div class="text"><h3>Upcoming Meetings</h3></div>
                </div>
              </div>
            </header>
            <BrowseMeetings
              meetings={ this.state.meetings }
            />
          </div>
        </div>
      </div>
    );
  }
}

