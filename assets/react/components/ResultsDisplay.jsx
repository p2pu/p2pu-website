import React from 'react'
import BrowseLearningCircles from './BrowseLearningCircles'

const ResultsDisplay = ({ resultsSubtitle }) => (
  <div className="search-results">
    <header>
      <div className="subtitle">
        <div className="underline dark">
          <div className="text"><h3>Results</h3></div>
        </div>
      </div>
    </header>
    <p className="centered large">{resultsSubtitle}</p>

    <BrowseLearningCircles learningCircles={ [] }/>
  </div>
)

export default ResultsDisplay