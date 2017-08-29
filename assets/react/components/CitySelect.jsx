import React, { Component } from 'react'
import _ from 'lodash'
import Select from 'react-select'
import css from 'react-select/dist/react-select.css'

export default class CitySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = (s) => this._handleChange(s)
    this.handleInputChange = (s) => this._handleInputChange(s)
    this.populateCities = () => this._populateCities()
    this.filterCitiesFromResults = (r) => this._filterCitiesFromResults(r)
    this.populateCities();
  }

  _handleChange(selected) {
    const query = selected ? selected.label : selected;

    this.props.handleSelect(query)
    this.setState({ value: selected })
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
    console.log('city select STATE value', this.state.value)
    console.log('city select PROPS value', this.state.value)
    return(
      <Select
        name={ this.props.name }
        className={ `city-select ${this.props.classes}` }
        value={ this.state.value }
        options={ this.state.cities }
        onChange={ this.handleChange }
        onInputChange={ this.props.handleInputChange }
        noResultsText='No results for this city'
      />
    )
  }
}
