import React from 'react'
import Masonry from 'react-masonry-component'
import CourseCard from './CourseCard.jsx'

const BrowseCourses = ({ results, updateQueryParams }) => {
  return (
    <Masonry className={"search-results row grid"}>
      {
        results.map((course, index) => (
          <CourseCard
            key={`course-card-${index}`}
            id={`course-card-${index}`}
            course={course}
            updateQueryParams={updateQueryParams}
            onSelectResult={onSelectResult}
            buttonText='Start a Learning Circle'
          />
        ))
      }
    </Masonry>
  );
}


export default BrowseCourses
