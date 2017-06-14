import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LearningCircleCard from './LearningCircleCard'

const BrowseLearningCircles = (props) => {

    return (
      <div className="search-results col-md-12">
        {
          this.props.learningCircles.map((circle) => (
            <LearningCircleCard props={circle} />
          ))
        }
      </div>
    );
}

