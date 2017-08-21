import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Filters from './Filters'
import ResultsDisplay from './ResultsDisplay'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = (s) => this._handleChange(s)
    this.handleInputChange = () => this._handleInputChange()
  }

  _handleChange(selected) {
    const query = selected ? selected.label : selected;
    this.props.searchByLocation(query);
    this.setState({ value: selected })
  }

  _handleInputChange() {
    this.props.clearResults()
  }

  render() {
    return(
      <div className="search-container">
        <SearchBar />
        <Filters />
        <ResultsDisplay />
      </div>
    )
  }
}
