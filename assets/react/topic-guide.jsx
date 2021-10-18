import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import jsonp from 'jsonp';

import {CourseCard} from 'p2pu-components';
import 'p2pu-components/dist/build.css';

const elem = document.getElementById('topic-courses');
//TODO const origin = elem.dataset.apiOrigin;
const origin = 'https://learningcircles.p2pu.org';
const props = JSON.parse(document.getElementById('topic-course-data').textContent);

const TopicCourses = (props) => {
  const topics = props.topics || [];
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (!props.topics) {
      return; // Don't load courses if no topics are defined
    }
    const searchParams = new URLSearchParams({
      limit: 5,
      languages: 'en',
      order: 'usage',
      topics: topics.join(','),
    });
    let searchUrl = `${props.origin}/api/courses/?${searchParams.toString()}`;
    jsonp(searchUrl, null, (error, data) => {
      if (error) {
        console.error(error.message);
      } else {
        console.log(data);
        setCourses(data.items);
      }
    });
  }, []);

  const moreLink = topics.map(t=>`topics=${t}`).join('&');
  return <>
    <CourseList {...props} courses={courses} />
    <a href={`/en/learning-resources/?${moreLink}`}>Search for more courses on this topic</a>
  </>
}


const handleSelectResult = course => {
  const selectCourse = `${origin}/en/studygroup/create/?course_id=${course.id}`;
  window.location.href = selectCourse;
}

const CourseList = ({courses = []}) => (
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

ReactDOM.render(<TopicCourses  origin={origin} {...props}/>, elem);
