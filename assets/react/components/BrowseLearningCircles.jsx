import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Masonry from 'react-masonry-component'
import LearningCircleCard from './LearningCircleCard.jsx'

const BrowseLearningCircles = (props) => {

  return (
    <Masonry className={"search-results row grid"}>
      {
        props.learningCircles.map((circle, index) => {
          const startTime = circle.meeting_time.slice(0, -3)
          const endTime = circle.end_time.slice(0, -3)
          const startDate = new Date(circle.start_date).toLocaleDateString('en-US', {month: 'long', year: 'numeric', day: 'numeric'});
          const schedule = `${circle.day} from ${startTime} to ${endTime} (${circle.time_zone})`;
          const duration = `${circle.weeks} weeks starting ${startDate}`;
          console.log('circle', circle)

          return(
            <LearningCircleCard
              key={index}
              name={ circle.course.title }
              url={ circle.url }
              schedule={ schedule }
              facilitator={ circle.facilitator }
              location={ circle.venue }
              duration={ duration }
              image={ circle.image_url }
              city={ circle.city }
            />
          )
        })
      }
      <div className="result-item grid-item start-learning-circle col-md-4 col-sm-12 col-xs-12">
        <div className="circle">
          <p>Start your own learning circle</p>
          <a href="https://learningcircles.p2pu.org/en/accounts/login/" className="btn p2pu-btn dark arrow"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </Masonry>
  );
}


export default BrowseLearningCircles
