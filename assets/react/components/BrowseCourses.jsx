import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Masonry from 'react-masonry-component'
import CourseCard from './CourseCard.jsx'

const BrowseCourses = (props) => {
  return (
    <Masonry className={"search-results row grid"}>
      {
        props.courses.map((course, index) => {
          return(
            <CourseCard
              key={index}
              course={course}
            />
          )
        })
      }
      <div className="result-item grid-item start-learning-circle col-md-4 col-sm-12 col-xs-12">
        <div className="circle">
          <p>Create your own course</p>
          <a href="https://learningcircles.p2pu.org/en/course/create/" className="btn p2pu-btn dark arrow"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </Masonry>
  );
}


export default BrowseCourses
