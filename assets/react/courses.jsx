import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search/Search'
import BrowseCourses from './components/Search/Courses/Browse'

const handleSelectResult = course => {
  const selectCourse = `https://learningcircles.p2pu.org/en/studygroup/create/?course_id=${course.id}`;
  window.location.href = selectCourse;
}

ReactDOM.render(
  <Search
    searchSubject={'courses'}
    Browse={BrowseCourses}
    onSelectResult={handleSelectResult}
  />, document.getElementById('search-courses-component')
);

