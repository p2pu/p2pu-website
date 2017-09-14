import React from 'react'
import BrowseLearningCircles from './BrowseLearningCircles'
import BrowseCourses from './BrowseCourses'
import SearchTags from './SearchTags'

const ResultsDisplay = (props) => {
  const renderResults = () => {
    if (props.searchSubject === 'courses') {
      return <BrowseCourses courses={props.data} updateQueryParams={props.updateQueryParams} />
    } else {
      return <BrowseLearningCircles learningCircles={props.data} />
    }
  }

  return(
    <div className="search-results col-sm-12">
      <header>
        <div className="subtitle">
          <div className="underline dark">
            <div className="text"><h3>Results</h3></div>
          </div>
        </div>
      </header>
      <SearchTags {...props} />
      <p className="clear-search small centered">
        <a href='/en/learning-circles'>Reset search form</a>
      </p>
      { renderResults() }
    </div>
  )
}

export default ResultsDisplay