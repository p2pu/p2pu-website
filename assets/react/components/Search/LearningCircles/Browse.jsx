import React from 'react'
import Masonry from 'react-masonry-component'

import LearningCircleCard from './LearningCircleCard.jsx'

const BrowseLearningCircles = ({ results }) => (
  <Masonry className={"search-results row grid"}>
    {
      results.map((circle, index) => (
        <LearningCircleCard
          key={`learning-circle-${index}`}
          learningCircle={circle}
        />
      ))
    }
    <div className="result-item grid-item col-md-4 col-sm-12 col-xs-12 start-learning-circle">
      <div className="circle">
        <p>Start a learning circle in your neighborhood</p>
        <a href="/en/facilitate" className="btn p2pu-btn dark arrow"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>
  </Masonry>
)

export default BrowseLearningCircles
