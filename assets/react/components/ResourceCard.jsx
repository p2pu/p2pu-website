import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { DISCOURSE_API_URL } from '../constants'

const ResourceCard = props => {

  const { topic } = props;
  const url = `${DISCOURSE_API_URL}/t/${topic.slug}`

  return (
      <div className="resource-card col-md-4 col-sm-12 col-xs-12">
        <div className="image">
          <img src={topic.image_url} />
          <div className="overlay">
            <div className="topic-type minicaps">video</div>
            <button className="bookmark-btn">+</button>
          </div>
        </div>
        <div className="title"><a href={url}>{topic.title}</a></div>
      </div>
  );
}

export default ResourceCard
