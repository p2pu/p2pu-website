import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchForm from './SearchForm'
import BrowseLearningCircles from './BrowseLearningCircles'
import LoadMoreResults from './LoadMoreResults'
import { LEARNING_CIRCLES_LIMIT } from '../constants'

export default class LearningCircles extends Component {

  constructor(props) {
    super(props);
    this.state = { searchResults: [], noResults: false };
    this.searchByLocation = (q) => this._searchByLocation(q);
    this.populateLearningCircles = () => this._populateLearningCircles();
    this.showMoreResults = (q) => this._showMoreResults(q);
    this.generateUrl = (opts) => this._generateUrl(opts);
    this.fetchLearningCircles = (opts, append) => this._fetchLearningCircles(opts, append);
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
      const optsCopy = Object.assign({}, this.state.currentQuery);
      urlOpts = Object.assign(optsCopy, { offset: this.state.searchResults.length });
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
      if (opts[param] && param.length > 2) {
        baseUrl += `&${param}=${encodeURIComponent(opts[param])}`
      }
    })

    return baseUrl;
  }

  _fetchLearningCircles(opts, append=false) {
    const url = this.generateUrl(opts)

   $.ajax({
      url,
      dataType: 'JSONP',
      type: 'GET',
      success: (res) => {
        if (append) {
          const results = this.state.searchResults.concat(res.items);
          this.setState({
            searchResults: results,
            currentQuery: opts,
            noResults: (res.items.length === 0)
          })
        } else {
          this.setState({
            searchResults: res.items,
            currentQuery: opts,
            noResults: (res.items.length === 0)
          })
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
        <LoadMoreResults noResults={ this.state.noResults } showMoreResults={ this.showMoreResults } />
      </div>
    );
  }
}

