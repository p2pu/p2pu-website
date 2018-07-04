import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ResourceCard from './ResourceCard'
import { DISCOURSE_API_URL } from '../constants'

const DiscourseCategory = props => {
  const { category, topics, step } = props;
  const categoryUrl = `${DISCOURSE_API_URL}/c/learning-circles/${category.slug}`
  return (
    <div className="row">
      <div className="category-title col-xs-12">
        <div className="step-number">
          <div className="number">{step}</div>
        </div>
        <div className="step-title">
          <div className="title large">{category.title}</div>
          <div className="link"><a href={categoryUrl}>See more</a></div>
        </div>
      </div>
      <div className="resources col-xs-12">
        {
          topics.map(topic => (
            <ResourceCard topic={topic} key={topic.id} />
          ))
        }
      </div>
    </div>
  )
}

export default DiscourseCategory