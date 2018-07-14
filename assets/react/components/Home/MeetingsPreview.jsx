import React, { Component } from 'react'
import BrowseMeetings from './BrowseMeetings'
import ApiHelper from '../../helpers/ApiHelper'

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
      <BrowseMeetings
        meetings={ this.state.meetings }
      />
    );
  }
}

