import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import Select from 'react-select'
import css from 'react-select/dist/react-select.css'
import { COURSE_CATEGORIES } from '../constants'

export default class TopicsFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { topic: [] };
    this.generateChangeHandler = (category) => this._generateChangeHandler(category);
    this.handleSelect = (selected) => this._handleSelect(selected);
    this.selectOptions = () => this._selectOptions();
  }

  _handleSelect(selected) {
    console.log('selected', selected)
    const newTopicList = selected.map(option => option.value)
    console.log('newTopicList', newTopicList)
    this.setState({ topic: selected }, this.props.updateQueryParams({ topic: newTopicList }))
  }

  _selectOptions() {
    return COURSE_CATEGORIES.map((cat) => ({ value: cat, label: cat }))
  }


  render() {
    return(
      <Select
        options={this.selectOptions()}
        multi={true}
        value={this.state.topic}
        onChange={this.handleSelect}
      />
    )
  }
}
