import React, { Component } from 'react'
import _ from 'lodash'
import Select from 'react-select'

export default class CitySelect extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = (s) => this._handleChange(s)
    this.handleInputChange = () => this._handleInputChange()
    this.populateCities = () => this._populateCities()
    this.filterCitiesFromResults = (r) => this._filterCitiesFromResults(r)
    this.populateCities();
  }

  _handleChange(selected) {
    const query = selected ? selected.label : selected;
    this.props.searchByLocation(query);
    this.setState({ value: selected })
  }

  _handleInputChange() {
    this.props.clearResults()
  }

  _populateCities() {
    $.ajax({
      url: 'https://learningcircles.p2pu.org/api/learningcircles/?active=true&signup=open',
      dataType: 'JSONP',
      type: 'GET',
      success: (res) => {
        this.filterCitiesFromResults(res.items);
      }
    });
  }

  _filterCitiesFromResults(courses) {
    let cities = courses.map(course => {
      if (course.city.length > 0) {
        const value = course.city.split(',')[0].toLowerCase().replace(/ /, '_')
        return { label: course.city, value: value }
      }
    });

    cities = _.compact(cities);
    cities = _.uniqBy(cities, 'value');
    cities = _.sortBy(cities, 'label');

    this.setState({ cities });
  }

  render() {
    return(
      <Select
        name="search-form"
        className="city-select col-md-6 col-sm-8 col-xs-12"
        value={ this.state.value }
        options={ this.state.cities }
        onChange={ this.handleChange }
        onInputChange={ this.handleInputChange }
        noResultsText='No results for this city'
      />
    )
  }
}
