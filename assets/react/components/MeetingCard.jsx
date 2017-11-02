import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const MeetingCard = (props) => {

  return (
    <div className="meeting-card col-xs-12">
      <div className='date'>
        <p><span className="bold">{props.date}</span> at <span className="bold">{props.time}</span></p>
      </div>
      <div className='meeting-info'>
        <p><span className="bold">{props.facilitator}</span> is facilitating the <span className="bold">{props.title}</span> learning circle at { props.location } in <span className="bold">{ props.city }</span></p>
      </div>
    </div>
  );
}

export default MeetingCard
