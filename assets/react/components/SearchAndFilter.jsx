import React from 'react'
import SearchBar from './SearchBar'
import FiltersSection from './FiltersSection'

const SearchAndFilter = (props) => {
  return(
    <div className="search-container">
      <SearchBar
        placeholder={props.placeholder}
        updateQueryParams={props.updateQueryParams}
      />
      <FiltersSection
        filterCollection={props.filterCollection}
        updateQueryParams={props.updateQueryParams}
        searchSubject={props.searchSubject}
        {...props}
      />
    </div>
  )
}

export default SearchAndFilter;