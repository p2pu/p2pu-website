import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import CitySelect from './CitySelect'
import RangeSliderWithLabel from './common/RangeSliderWithLabel'

export default class LocationFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { useLocation: false, city: null }
    this.getLocation = (checkboxValue) => this._getLocation(checkboxValue);
    this.handleCitySelect = (city) => this._handleCitySelect(city);
    this.handleRangeChange = (value) => this._handleRangeChange(value);
  }

  _getLocation(checkboxValue) {
    this.setState({ useLocation: checkboxValue });

    if (checkboxValue === false) {
      this.props.updateQueryParams({ latitude: null, longitude: null });
      return;
    }

    const success = (position) => {
      this.props.updateQueryParams({ latitude: position.coords.latitude, longitude: position.coords.longitude, city: null })
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
    this.setState({ useLocation: false })
    this.props.updateQueryParams({ city, latitude: null, longitude: null, distance: 50 })
  }

  _handleRangeChange(value) {
    this.props.updateQueryParams({ distance: value })
  }

  render() {
    return(
      <div>
        <CheckboxWithLabel
          classes='col-sm-12'
          name='geolocation'
          label='Use my current location'
          checked={this.state.useLocation}
          handleChange={this.getLocation}
        />
        <RangeSliderWithLabel
          classes='col-sm-12'
          label={`Within ${this.props.distance}km`}
          name='distance-slider'
          value={this.props.distance}
          handleChange={this.handleRangeChange}
          min={10}
          max={150}
          step={10}
        />
        <div className='select-with-label label-left col-sm-12' >
          <label htmlFor='select-city'>Or select a location:</label>
          <CitySelect
            classes=''
            name='select-city'
            label="Select a location"
            handleSelect={this.handleCitySelect}
          />
        </div>
      </div>
    )
  }
}
