import React, { Component } from 'react'
import _ from 'lodash'
import CitySelect from './CitySelect'

const SearchForm = (props) => (
  <div className="course-search">
    <div className="label col-md-1 col-sm-2 col-xs-12">I live in</div>
    <CitySelect
      name="search-form"
      classes="col-md-6 col-sm-8 col-xs-12"
      handleSelect={ props.searchByLocation }
      handleInputChange={ props.clearResults }
    />
  </div>
)

export default SearchForm
