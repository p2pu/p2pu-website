import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import { MEETING_DAYS } from '../constants'

export default class TopicsFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getLocation = (checkboxValue) => this._getLocation(checkboxValue);
    this.handleCitySelect = (city) => this._handleCitySelect(city);
    this.handleRangeChange = (value) => this._handleRangeChange(value);
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

  _handleRangeChange(value) {
    this.props.updateQueryParams({ distance: value })
  }

  render() {
    console.log('this.props.distance', this.props.distance);

    return(
      <div>
        <CheckboxWithLabel
          classes='col-sm-12 col-md-6 col-lg-6'
          name='geolocation'
          label='Use my current location'
          handleChange={this.getLocation}
        />
        <RangeSliderWithLabel
          classes='col-sm-12 col-md-6 col-lg-6'
          label={`Within a distance of ${this.props.distance}km`}
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
            classes='col-sm-12'
            name='select-city'
            label="Select a location"
            handleSelect={this.handleCitySelect}
          />
        </div>
      </div>
    )
  }
}
