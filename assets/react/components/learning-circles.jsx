import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchForm from './SearchForm'
import BrowseLearningCircles from './BrowseLearningCircles'


export default class LearningCircles extends Component {

  constructor(props) {
    super(props);
    this.state = { searchResults: [] };
    this.searchByLocation = (q) => this._searchByLocation(q);
  }

  _searchByLocation(query) {
    // make query to API
    this.setState({ searchResults: results })
  }

  render() {
    const locationPlaceholder = "Toronto, ON, Canada";

    return (
      <div className="search-and-results">
        <SearchForm placeholder={locationPlaceholder} />
        <BrowseLearningCircles learningCircles={this.state.searchResults} />
      </div>
    );
  }
}

