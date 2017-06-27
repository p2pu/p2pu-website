import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchForm from './SearchForm'
import BrowseLearningCircles from './BrowseLearningCircles'
import { LEARNING_CIRCLES_LIMIT } from '../constants'

export default class LearningCircles extends Component {

  constructor(props) {
    super(props);
    this.state = { searchResults: [] };
    this.searchByLocation = (q) => this._searchByLocation(q);
    this.populateLearningCircles = () => this._populateLearningCircles();
    this.showMoreResults = (q) => this._showMoreResults(q);
    this.generateUrl = (opts) => this._generateUrl(opts);
    this.fetchLearningCircles = (opts) => this._fetchLearningCircles(opts);
    this.populateLearningCircles();
  }

  _populateLearningCircles() {
    const urlOpts = {
      active: true,
      limit: LEARNING_CIRCLES_LIMIT
    }
    this.fetchLearningCircles(urlOpts);
  }

  _searchByLocation(query) {
    const urlOpts = {
      active: true,
      limit: LEARNING_CIRCLES_LIMIT,
      city: query
    }
    this.fetchLearningCircles(urlOpts);
  }

  _showMoreResults() {
    let urlOpts;

    if (this.state.currentQuery) {
      urlOpts = Object.assign({ offset: this.state.searchResults.length }, this.state.currentQuery);
    } else {
      urlOpts = {
        active: true,
        limit: LEARNING_CIRCLES_LIMIT,
        offset: this.state.searchResults.length
      }
    }

    this.fetchLearningCircles(urlOpts, true);
  }

  _generateUrl(opts) {
    const validParams = ['active', 'limit', 'offset', 'city'];
    let baseUrl = `https://learningcircles.p2pu.org/api/learningcircles?`;

    validParams.forEach((param) => {
      if (opts[param]) {
        baseUrl += `&${param}=${encodeURIComponent(opts[param])}`
      }
    })

    return baseUrl;
  }

  _fetchLearningCircles(opts, append = false) {
    const url = this.generateUrl(opts)
   $.ajax({
      url,
      dataType: 'JSONP',
      type: 'GET',
      success: (res) => {
        if (append) {
          const results = this.state.searchResults.concat(res.items);
          this.setState({ searchResults: results, currentQuery: opts })
        } else {
          this.setState({ searchResults: res.items, currentQuery: opts })
        }
      }
    });
  }

  render() {
    return (
      <div className="search-and-results">
        <SearchForm searchByLocation={ this.searchByLocation }/>
        <BrowseLearningCircles
          learningCircles={ this.state.searchResults }
          showMoreResults={ this.showMoreResults }
        />
        <div className="load-more">
          <p className="large">Load more results</p>
          <button className="btn p2pu-btn dark arrow" onClick={ this.showMoreResults }><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
        </div>
      </div>
    );
  }
}

