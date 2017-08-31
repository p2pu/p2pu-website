import React, { Component } from 'react'
import CheckboxWithLabel from './common/CheckboxWithLabel'
import Select from 'react-select'
import css from 'react-select/dist/react-select.css'
import { COURSE_CATEGORIES } from '../constants'
import ApiHelper from '../helpers/ApiHelper'
import _ from 'lodash'

export default class TopicsFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { topics: [], options: [] };
    this.generateChangeHandler = (category) => this._generateChangeHandler(category);
    this.handleSelect = (selected) => this._handleSelect(selected);
    this.fetchTopics = () => this._fetchTopics();
  }

  componentDidMount() {
    this.fetchTopics();
  }

  componentWillReceiveProps(nextProps) {
    const topics = nextProps.topics ? nextProps.topics.map((topic) => ({ value: topic, label: topic })) : [];
    this.setState({ topics: topics })
  }

  _fetchTopics() {
    const api = new ApiHelper('courses');
    const params = { active: true }
    const callback = (response) => {
      let topics = response.items.map((course) => course.topics);
      topics = _.flatten(topics);
      topics = _.uniq(topics);
      topics = topics.sort().map((topic) => ({ value: topic, label: topic }));

      this.setState({ options: topics })
    }

    api.fetchResource({ params, callback })
  }

  _handleSelect(selected) {
    const newTopicList = selected.map(option => option.value)
    this.setState({ topics: selected }, this.props.updateQueryParams({ topics: newTopicList }))
  }

  render() {
    return(
      <Select
        options={this.state.options}
        multi={true}
        value={this.state.topics}
        onChange={this.handleSelect}
      />
    )
  }
}
