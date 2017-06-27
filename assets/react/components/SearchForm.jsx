import React, { Component } from 'react'
import _ from 'lodash'
import Select from 'react-select'

export default class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = (s) => this._handleChange(s)
    this.populateCities = () => this._populateCities()
    this.filterCitiesFromResults = (r) => this._filterCitiesFromResults(r)
    this.populateCities();
  }

  _handleChange(selected) {
    const query = selected ? selected.label : selected;
    this.props.searchByLocation(query);
    this.setState({ value: selected })
  }

  _populateCities() {
    $.ajax({
      url: 'https://learningcircles.p2pu.org/api/learningcircles?active=true',
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

    this.setState({ cities });
  }

  render() {
    return(
      <div className="course-search">
        <div className="label col-md-1 col-sm-2 col-xs-12">I live in</div>
        <Select name="search-form" className="city-select col-md-6 col-sm-8 col-xs-12" value={ this.state.value } options={ this.state.cities } onChange={this.handleChange} />
      </div>
    )
  }
}
