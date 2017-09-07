import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import UsageBadge from './UsageBadge'
import _ from 'lodash'

const CourseCard = (props) => {

  const feedbackPage = `https://etherpad.p2pu.org/p/course-feedback-${props.course.id}`
  const selectCourse = `https://learningcircles.p2pu.org/en/facilitator/study_group/create/?course_id=${props.course.id}`
  const topicsList = _.take(props.course.topics, 4).join(', ')
  const availability = props.course.on_demand ? 'Course available on demand' : 'Check course availability'

  return (
    <div className="result-item grid-item col-md-4 col-sm-12 col-xs-12">
      <div className="course-card col-xs-12">
        <UsageBadge number={props.course.learning_circles} />
        <h4 className="title">{ props.course.title }</h4>
        <p className="caption">{ props.course.caption }</p>
        <p className="provider">{ `Provided by ${props.course.provider}` }</p>
        <p className="availability">{ availability }</p>
        <p className="tags">{ `Topics: ${topicsList}` }</p>

        <div className='actions'>
          <a href={props.course.link} className='' target='_blank'><i className="material-icons">open_in_new</i>See the course</a>
          <a href={feedbackPage} className='' target='_blank'><i className="material-icons">open_in_new</i>Facilitator feedback</a>
        </div>
        <p className="cta">
          <a href={selectCourse} className='btn p2pu-btn transparent'>Start a learning circle</a>
        </p>
      </div>
    </div>
  );
}

export default CourseCard
