import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const CourseCard = (props) => {

  const feedbackPage = `https://etherpad.p2pu.org/p/course-feedback-${props.course.id}`
  const selectCourse = `https://learningcircles.p2pu.org/en/facilitator/study_group/create/?course_id=${props.course.id}`

  return (
    <div className="result-item grid-item col-md-4 col-sm-12 col-xs-12">
      <div className="course-card col-xs-12">
        <h4 className="title">{ props.course.title }</h4>
        <p className="caption">{ props.course.caption }</p>
        <p className="provider">{ `Provider: ${props.course.provider}` }</p>
        <p className="learning-circles">{ `Learning circles: ${props.course.learning_circles}`}</p>
        <p className="actions">
          <a href={props.course.link} className='btn p2pu-btn transparent' target='_blank'>Course</a>
          <a href={feedbackPage} className='btn p2pu-btn transparent' target='_blank'>Feedback</a>
        </p>
        <p className="actions">
          <a href={selectCourse} className='btn p2pu-btn light submit'>Start a learning circle</a>
        </p>
      </div>
    </div>
  );
}

export default CourseCard
