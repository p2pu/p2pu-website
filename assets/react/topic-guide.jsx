import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import jsonp from 'jsonp';

import CourseCard from 'p2pu-components/dist/Courses/CourseCard';
import 'p2pu-components/dist/build.css';

import DiscourseTopic from './components/Topic/DiscourseTopic';

const elem = document.getElementById('topic-courses');
const origin = elem.dataset.apiOrigin;
//const origin = 'https://learningcircles.p2pu.org';
const topicSlug = elem.dataset.topicSlug;

const TopicCourses = (props) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (!props.topicSlug) {
      return; // Don't load courses if no topics are defined
    }
    const searchParams = new URLSearchParams({
      limit: 5,
      languages: 'en',
      order: 'usage',
      topics: topicSlug,
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
    <a href={`/en/learning-resources/?${moreLink}`}>See more resources on this topic</a>
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

ReactDOM.render(<TopicCourses origin={origin} topicSlug={topicSlug}/>, elem);


const discourseElem = document.getElementById('discourse-topic');
if (discourseElem){
  const discourseTopicUrl = discourseElem.dataset.discourseTopicUrl;
  ReactDOM.render(<DiscourseTopic topicUrl={discourseTopicUrl} />, discourseElem);
}

