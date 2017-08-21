import React, { Component } from 'react'
import Filter from './Filter'

export default class FilterSection extends Component {
  constructor(props) {
    super(props)
    this.state = { activeFilter: '' }
    this.updateActiveFilter = (filter) => this._updateActiveFilter(filter);
  }

  _updateActiveFilter(filter) {
    this.setState({ activeFilter: filter })
  }

  render() {
    console.log('this.state.activeFilter', this.state.activeFilter)
    return(
      <div className='filters-bar col-sm-12'>
        <div className='slider'>
          {
            this.props.filterTypes.map((filter, index) => (
              <Filter
                key={index}
                filter={filter}
                activeFilter={this.state.activeFilter}
                updateActiveFilter={this.updateActiveFilter}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
