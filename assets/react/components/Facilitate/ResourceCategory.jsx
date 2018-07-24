import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ResourceCard from './ResourceCard'
import { DISCOURSE_API_URL } from '../../constants'

const ResourceCategory = props => {
  const { category, topics, step } = props;
  const categoryUrl = `${DISCOURSE_API_URL}/c/learning-circles/${category.slug}`
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <div className="category-title">
            <div className="step-number">
              <div className="number">{step}</div>
            </div>
            <div className="step-title">
              <div className="title large">{category.title}</div>
              <div className="link"><a href={categoryUrl}>See more</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="resources">
          {
            topics.map(topic => (
              <ResourceCard topic={topic} key={topic.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ResourceCategory