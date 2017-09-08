import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import CitySelect from './CitySelect'
import RangeSliderWithLabel from './common/RangeSliderWithLabel'

export default class LocationFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { city: null }
    this.getLocation = (checkboxValue) => this._getLocation(checkboxValue);
    this.handleCitySelect = (city) => this._handleCitySelect(city);
    this.handleRangeChange = (value) => this._handleRangeChange(value);
    this.generateLocationLabel = () => this._generateLocationLabel();
  }

  _getLocation(checkboxValue) {
    if (checkboxValue === true) {
      this.setState({ gettingLocation: true });
      this.props.updateQueryParams({ useLocation: checkboxValue })
    } else {
      this.props.updateQueryParams({ latitude: null, longitude: null, useLocation: checkboxValue });
      return;
    }

    const success = (position) => {
      this.props.updateQueryParams({ latitude: position.coords.latitude, longitude: position.coords.longitude, city: null })
      this.setState({ gettingLocation: false})
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

  _generateLocationLabel() {
    let label = 'Use my current location';

    if (this.state.error) {
      label = this.state.error;
    } else if (this.state.gettingLocation) {
      label = 'Detecting your location...';
    } else if (!this.state.gettingLocation && this.props.latitude && this.props.longitude) {
      label = 'Using your current location';
    }

    return label;
  }

  _handleCitySelect(city) {
    this.props.updateQueryParams({ city, latitude: null, longitude: null, distance: 50, useLocation: false })
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
          label={this.generateLocationLabel()}
          checked={this.props.useLocation}
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
          disabled={!this.props.useLocation}
        />
        <div className='divider col-sm-12'>
          <div className='divider-line'></div>
          <div className='divider-text'>or</div>
        </div>
        <div className='select-with-label label-left col-sm-12' >
          <label htmlFor='select-city'>Select a location:</label>
          <CitySelect
            classes=''
            name='select-city'
            label="Select a location"
            value={this.props.city}
            handleSelect={this.handleCitySelect}
          />
        </div>
      </div>
    )
  }
}
