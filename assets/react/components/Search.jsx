import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FiltersSection from './FiltersSection'
import ResultsDisplay from './ResultsDisplay'
import { SEARCH_PROPS } from '../constants'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = (s) => this._handleChange(s);
    this.handleInputChange = () => this._handleInputChange();
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
    const filterCollection = SEARCH_PROPS[this.props.searchSubject].filters;
    const placeholder = SEARCH_PROPS[this.props.searchSubject].placeholder;
    const resultsSubtitle = SEARCH_PROPS[this.props.searchSubject].resultsSubtitle;

    return(
      <div className="search-container">
        <SearchBar placeholder={placeholder}/>
        <FiltersSection filterCollection={filterCollection} />
        <ResultsDisplay resultsSubtitle={resultsSubtitle} />
      </div>
    )
  }
}
