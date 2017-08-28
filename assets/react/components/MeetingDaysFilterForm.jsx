import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import { MEETING_DAYS } from '../constants'

export default class MeetingDaysFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { weekday: [] };
    this.generateChangeHandler = (day) => this._generateChangeHandler(day);
  }

  _generateChangeHandler(day) {
    return (checked) => {
      let newWeekdayList = this.state.weekday;

      if (checked) {
        newWeekdayList.push(day)
      } else {
        newWeekdayList = newWeekdayList.filter((weekday) => { return weekday !== day });
      }

      this.setState({ weekday: newWeekdayList }, () => {  this.props.updateQueryParams(this.state) })
    }
  }

  render() {
    return(
      <div>
        {
          MEETING_DAYS.map((day, index) => (
            <CheckboxWithLabel
              key={index}
              classes='col-sm-12 col-md-6 col-lg-6'
              name={day}
              label={day}
              handleChange={this.generateChangeHandler(day)}
            />
          ))
        }
      </div>
    )
  }
}
