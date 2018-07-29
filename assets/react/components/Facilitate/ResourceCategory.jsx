import React from 'react'
import ResourceCard from './ResourceCard'
import { DISCOURSE_API_URL } from '../../constants'
import IntroText from './IntroText'

const ResourceCategory = ({ category, topics, step }) => {
  const categoryUrl = `${DISCOURSE_API_URL}/c/learning-circles/${category.slug}`
  return (
    <div className="resource-category" id={category.slug}>
      <div className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="category-title">
              <div className="step-number">
                <h2>{`Step ${step}`}</h2>
              </div>
              <div className="step-title">
                {category.title}
              </div>
            </div>
          </div>
        </div>

        <IntroText section={category.slug}/>

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
    </div>
  )
}

export default ResourceCategory