import React, { Component } from 'react'
import LocationFilterForm from './LocationFilterForm'

export default class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.generateFilterForm = () => this._generateFilterForm()
  }

  _generateFilterForm() {
    switch (this.props.activeFilter) {
      case 'location':
      return <LocationFilterForm {...this.props} />;
    }
  }

  render() {
    const openClass = this.props.activeFilter ? 'open' : '';

    return(
      <div className={`filter-form-dropdown col-sm-12 ${openClass}`}>
        {this.generateFilterForm()}
      </div>
    )
  }
}
