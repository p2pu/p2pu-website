import React, { Component } from 'react'
import Filter from './Filter'
import FilterForm from './FilterForm'

export default class FilterSection extends Component {
  constructor(props) {
    super(props)
    this.state = { activeFilter: '' };
    this.updateActiveFilter = (filter) => this._updateActiveFilter(filter);
  }

  _updateActiveFilter(filter) {
    this.setState({ activeFilter: filter })
  }

  render() {
    return(
      <div className="filter-section">
        <div className='filters-bar col-sm-12'>
          <div className='slider'>
            {
              this.props.filterCollection.map((filter, index) => (
                <Filter
                  key={index}
                  filter={filter}
                  active={this.state.activeFilter === filter}
                  updateActiveFilter={this.updateActiveFilter}
                />
              ))
            }
          </div>
        </div>
        <FilterForm
          activeFilter={this.state.activeFilter}
          updateQueryParams={this.props.updateQueryParams}
        />
      </div>
    )
  }
}
