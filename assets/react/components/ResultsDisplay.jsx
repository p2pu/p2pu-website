import React from 'react'
import BrowseLearningCircles from './BrowseLearningCircles'
import BrowseCourses from './BrowseCourses'
import SearchTags from './SearchTags'

const ResultsDisplay = (props) => {
  const renderResults = () => {
    if (props.searchSubject === 'courses') {
      return <BrowseCourses courses={props.data} />
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
      { renderResults() }
    </div>
  )
}

export default ResultsDisplay