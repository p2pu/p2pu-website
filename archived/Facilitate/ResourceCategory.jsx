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
          <div className="col-12">
            <div className="category-title">
              <div className="step-number">
                {`Step ${step}`}
              </div>
              <div className="step-title">
                <h2>{category.title}</h2>
              </div>
            </div>
          </div>
        </div>

        <IntroText section={category.slug}/>

        <div className="row resources">
            {
              topics.map(topic => (
                <ResourceCard topic={topic} key={topic.id} defaultImagePath={category.defaultImagePath} />
              ))
            }
          <div className="see-more col-12 minicaps">
            <a href={categoryUrl}>
              More resources
              <i className="material-icons">arrow_forward</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceCategory