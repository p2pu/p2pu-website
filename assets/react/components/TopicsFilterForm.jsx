import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import { COURSE_CATEGORIES } from '../constants'

export default class TopicsFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { topic: [] };
    this.generateChangeHandler = (category) => this._generateChangeHandler(category);
  }

  _generateChangeHandler(category) {
    console.log('category', category);
    return (checked) => {
      let newTopicList = this.state.topics;

      if (checked) {
        newTopicList.push(category)
      } else {
        newTopicList = newTopicList.filter((topic) => { return topic !== category });
      }

      this.setState({ topic: newTopicList }, () => {  this.props.updateQueryParams(this.state) })
    }
  }

  render() {
    console.log('COURSE_CATEGORIES', COURSE_CATEGORIES)
    return(
      <div>
        {
          COURSE_CATEGORIES.map((category, index) => (
            <CheckboxWithLabel
              key={index}
              classes='col-sm-12 col-md-6 col-lg-6'
              name={category}
              label={category}
              handleChange={this.generateChangeHandler(category)}
            />
          ))
        }
      </div>
    )
  }
}
