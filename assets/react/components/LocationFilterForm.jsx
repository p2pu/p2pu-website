import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import CitySelect from './CitySelect'

export default class LocationFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getLocation = (checkboxValue) => this._getLocation(checkboxValue);
    this.handleCitySelect = (city) => this._handleCitySelect(city);
  }

  _getLocation(checkboxValue) {
    if (checkboxValue === false) {
      this.props.updateQueryParams({ latitude: null, longitude: null });
      return;
    }

    const success = (position) => {
      this.props.updateQueryParams({ latitude: position.coords.latitude, longitude: position.coords.longitude })
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

  _handleCitySelect(city) {
    this.props.updateQueryParams({ city })
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
        <CitySelect
          classes='col-sm-12'
          name='select-city'
          label="Select a location"
          handleSelect={this.handleCitySelect}
        />
      </div>
    )
  }
}
