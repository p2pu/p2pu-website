import React from 'react'
import BrowseLearningCircles from './LearningCircles/Browse'
import BrowseCourses from './Courses/Browse'
import SearchTags from './SearchTags'

const ResultsDisplay = (props) => {
  const renderResults = () => {
    if (props.searchSubject === 'courses') {
      return <BrowseCourses courses={props.searchResults} updateQueryParams={props.updateQueryParams} />
    } else {
      return <BrowseLearningCircles learningCircles={props.searchResults} />
    }
  }

  return(
    <div className="search-results col-sm-12">
      <SearchTags {...props} />
      { renderResults() }
    </div>
  )
}

export default ResultsDisplay