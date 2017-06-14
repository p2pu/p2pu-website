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
    const uriEncodedCity = encodeURIComponent(query)
    const url = `https://learningcircles.p2pu.org/api/learningcircles?city=${uriEncodedCity}&active=true`
    $.ajax({
      url,
      dataType: 'JSONP',
      type: 'GET',
      success: (res) => {
        this.setState({ searchResults: res.items })
      }
    });
  }

  render() {
    return (
      <div className="search-and-results">
        <SearchForm searchByLocation={ this.searchByLocation }/>
        <BrowseLearningCircles learningCircles={ this.state.searchResults } />
      </div>
    );
  }
}

