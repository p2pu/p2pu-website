import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import SelectWithLabel from './common/SelectWithLabel'

export default class LocationFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getLocation = (checkboxValue) => this._getLocation(checkboxValue)
  }

  _getLocation(checkboxValue) {
    if (checkboxValue === false) {
      this.setState({ lat: null, lon: null });
      return;
    }

    const success = (position) => {
      this.setState({ lat: position.coords.latitude, lon: position.coords.longitude })
    }

    const error = () => {
      this.setState({ error: 'Unable to detect location.' })
    }

    const options = {
      timeout: 10000,
      maximumAge: 60000
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success, error, options)
    } else {
      this.setState({ error: 'Geolocation is not supported by this browser.'})
    }
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
    console.log(this.state);

    return(
      <div>
        <CheckboxWithLabel
          classes='col-sm-12 col-md-6 col-lg-3'
          name='geolocation'
          label='Use my current location'
          handleChange={this.getLocation}
        />
        <SelectWithLabel
          classes='col-sm-12'
          name='select-city'
          label="Select a location"
        />
      </div>
    )
  }
}
