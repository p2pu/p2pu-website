import React from 'react'
import moment from 'moment'
import { Card, CardTitle, CardBody } from '../Card';

const LearningCircleCard = (props) => {
  const { learningCircle } = props;
  const startDate = moment(`${learningCircle.start_date} ${learningCircle.meeting_time}`);
  const endDate = moment(`${learningCircle.start_date} ${learningCircle.end_time}`);
  const formattedDate = startDate.format('MMMM Do, YYYY');
  const formattedStartTime = startDate.format('h:mma');
  const formattedEndTime = endDate.format('h:mma');
  const schedule = `${learningCircle.day} from ${formattedStartTime} to ${formattedEndTime} (${learningCircle.time_zone})`;
  const duration = `${learningCircle.weeks} weeks starting ${formattedDate}`;
  const name = learningCircle.course.title

  return (
    <Card>
      <CardTitle>{ name }</CardTitle>

      {
        learningCircle.image_url &&
        <div className="image-container hidden-on-mobile">
          <div className="image">
            <img src={ learningCircle.image_url } alt={ name } />
          </div>
        </div>
      }

      <CardBody>
        <p className="schedule">
          <i className="material-icons">schedule</i>
          { schedule }
        </p>
        <p className="duration">
          <i className="material-icons">today</i>
          { duration }
        </p>
        <p className="city-country">
          <i className="material-icons">place</i>
          { learningCircle.city }
        </p>
        <p className="facilitator">
          <i className="material-icons">face</i>
          Facilitated by { learningCircle.facilitator }
        </p>
        <p className="location">
          <i className="material-icons">store</i>
          Meeting at { learningCircle.venue }
        </p>
        <div className='actions'>
          <div className="primary-cta">
            <a href={ learningCircle.url }>
              <button className="btn p2pu-btn transparent">Sign up</button>
            </a>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default LearningCircleCard
