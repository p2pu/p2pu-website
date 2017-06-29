import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const LoadMoreResults = (props) => {
  if (props.noResults) {
    return null
  } else {
    return (
      <div className="load-more">
        <p className="large">Load more results</p>
        <button className="btn p2pu-btn dark arrow" onClick={ props.showMoreResults }><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
      </div>
    )
  }
}

export default LoadMoreResults