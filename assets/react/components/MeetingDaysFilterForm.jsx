import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import { MEETING_DAYS } from '../constants'

export default class MeetinDaysFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { days: [] };
    this.generateChangeHandler = (day) => this._generateChangeHandler(day);
  }

  _generateChangeHandler(day) {
    console.log('category', day);
    return (checked) => {
      let newTopicList = this.state.topics;

      if (checked) {
        newTopicList.push(day)
      } else {
        newTopicList = newTopicList.filter((topic) => { return topic !== day });
      }

      this.setState({ topic: newTopicList }, () => {  this.props.updateQueryParams(this.state) })
    }
  }

  render() {
    console.log('MEETING_DAYS', MEETING_DAYS)
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
