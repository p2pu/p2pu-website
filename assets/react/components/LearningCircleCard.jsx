import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const LearningCircleCard = (props) => {

  const goToUrl = () => {
    window.location.href = props.url;
  }

  return (
    <div className="result-item grid-item col-md-4 col-sm-12 col-xs-12">
      <div className="card col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-xs-12" onClick={ goToUrl }>
        <h4 className="title">{ props.name }</h4>
        <p className="schedule">{ props.schedule }</p>
        <p className="city-country">{ props.city }</p>
        <div className="show-on-hover">
          <p className="facilitator">Facilitator: { props.facilitator }</p>
          <p className="location">Location: { props.location }</p>
          <p className="duration">{ props.duration }</p>
        </div>
      </div>
      <div className="image-container col-xs-0 hidden-on-mobile">
        <div className="image">
          {
            props.image &&
            <img src={ props.image } alt={ props.name } />
          }
        </div>
      </div>
    </div>
  );
}

export default LearningCircleCard
