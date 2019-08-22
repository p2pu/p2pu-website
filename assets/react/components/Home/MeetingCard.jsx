import React from 'react'

const MeetingCard = (props) => {

  return (
    <div className="meeting-card">
      <a href={props.url} target="_blank" className="undecorated">
        <div className="content">
          <div className="date">
            <i className="material-icons">today</i>
            <p><span className="bold">{props.date}</span> at <span className="bold">{props.time}</span></p>
          </div>
          <div className="info">
            <p className='meeting-info mb-0'>
              <span className="bold">{props.facilitator}</span> is facilitating a learning circle on <span className="bold">{props.title}</span> at { props.location } in { props.city }
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default MeetingCard
