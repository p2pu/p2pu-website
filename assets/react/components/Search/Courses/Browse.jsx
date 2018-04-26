import React from 'react'
import Masonry from 'react-masonry-component'
import CourseCard from './CourseCard.jsx'

const BrowseCourses = ({ courses, updateQueryParams }) => {
  return (
    <Masonry className={"search-results row grid"}>
      {
        courses.map((course, index) => (
          <CourseCard
            key={`course-card-${index}`}
            id={`course-card-${index}`}
            course={course}
            updateQueryParams={updateQueryParams}
          />
        ))
      }
    </Masonry>
  );
}


export default BrowseCourses
