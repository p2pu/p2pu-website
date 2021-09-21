import React from 'react';
import ReactDOM from 'react-dom';

import {CourseCard} from 'p2pu-components';
import 'p2pu-components/dist/build.css';

const handleSelectResult = course => {
  const selectCourse = `https://learningcircles.p2pu.org/en/studygroup/create/?course_id=${course.id}`;
  window.location.href = selectCourse;
}

const elem = document.getElementById('topic-courses');
const origin = elem.dataset.apiOrigin;
const props = JSON.parse(document.getElementById('topic-course-data').textContent);


const CourseList = ({courses}) => (
  <div>
    { 
      courses.map( (course,index) => 
        <CourseCard 
          key={`course-card-${index}`}
          id={`course-card-${index}`}
          course={course}
          updateQueryParams={()=>{}}
          moreInfo={true}
          onSelectResult={handleSelectResult}
          buttonText={`Use this course`}
        />
      )
    }
  </div>
);

ReactDOM.render(<CourseList {...props} />, elem);
