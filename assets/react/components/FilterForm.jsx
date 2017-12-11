import React, { Component } from 'react'
import LocationFilterForm from './LocationFilterForm'
import TopicsFilterForm from './TopicsFilterForm'
import MeetingDaysFilterForm from './MeetingDaysFilterForm'
import OrderCoursesForm from './OrderCoursesForm'


export default class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.generateFilterForm = () => this._generateFilterForm()
  }

  _generateFilterForm() {
    switch (this.props.activeFilter) {
      case 'location':
      return <LocationFilterForm {...this.props} />;
      case 'topics':
      return <TopicsFilterForm {...this.props} />;
      case 'meetingDays':
      return <MeetingDaysFilterForm { ...this.props} />;
      case 'orderCourses':
      return <OrderCoursesForm { ...this.props} />;
    }
  }

  render() {
    const openClass = this.props.activeFilter ? 'open' : '';
    const closeFilter = () => { this.props.updateActiveFilter(null) };

    return(
      <div className={`filter-form-dropdown ${openClass}`}>
        <div className='close' style={{ textAlign: 'right', float: 'none' }}>
          <i className="material-icons" onClick={closeFilter}>close</i>
        </div>
        {this.generateFilterForm()}
      </div>
    )
  }
}
