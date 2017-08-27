import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import { COURSE_CATEGORIES } from '../constants'

export default class TopicsFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  generateChangeHandler(category) {
    return (checked) => {
      this.setState({ [category]: checked }, () => { console.log(this.state)})
    }
  }

  generateTopicCheckboxes() {
    return COURSE_CATEGORIES.forEach((category) => {
      return(
        <CheckboxWithLabel
          classes='col-sm-12 col-md-6 col-lg-6'
          name={category}
          label={category}
          handleChange={generateChangeHandler(category)}
        />
      )
    })
  }

  render() {
    return(
      <div>
        {generateTopicCheckboxes()}
      </div>
    )
  }
}
