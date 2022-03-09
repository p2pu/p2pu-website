import React from 'react';
import ReactDOM from 'react-dom';
import SearchProvider from 'p2pu-components/dist/Search/SearchProvider'
import SearchCourses from 'p2pu-components/dist/Courses/SearchCourses'

import 'p2pu-components/dist/build.css';

const handleSelectResult = course => {
  const selectCourse = `https://learningcircles.p2pu.org/en/studygroup/create/?course_id=${course.id}`;
  window.location.href = selectCourse;
}
const elem = document.getElementById('search-courses-component');
//TODO const origin = elem.dataset.apiOrigin;
let origin = 'https://learningcircles.p2pu.org';

ReactDOM.render(
  <SearchProvider
    searchSubject={'courses'}
    origin={origin}
    onSelectResult={handleSelectResult}
    initialState={{languages:['en']}}
  >
    <SearchCourses/>
  </SearchProvider>, document.getElementById('search-courses-component')
);
