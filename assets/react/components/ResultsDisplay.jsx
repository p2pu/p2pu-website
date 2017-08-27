import React from 'react'
import BrowseLearningCircles from './BrowseLearningCircles'

const ResultsDisplay = ({ resultsSubtitle, learningCircles }) => (
  <div className="search-results col-sm-12">
    <header>
      <div className="subtitle">
        <div className="underline dark">
          <div className="text"><h3>Results</h3></div>
        </div>
      </div>
    </header>
    <p className="centered large">{resultsSubtitle}</p>

    <BrowseLearningCircles learningCircles={learningCircles}/>
  </div>
)

export default ResultsDisplay