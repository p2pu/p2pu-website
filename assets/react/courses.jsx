import React from 'react';
import ReactDOM from 'react-dom';
import { Search, BrowseCourses } from 'p2pu-components';

import 'p2pu-components/dist/build.css';

const handleSelectResult = course => {
  const selectCourse = `https://learningcircles.p2pu.org/en/studygroup/create/?course_id=${course.id}`;
  window.location.href = selectCourse;
}
const elem = document.getElementById('search-courses-component');
const origin = elem.dataset.apiOrigin;

ReactDOM.render(
  <Search
    searchSubject={'courses'}
    origin={origin}
    Browse={BrowseCourses}
    onSelectResult={handleSelectResult}
    initialState={{languages:['en']}}
  />, document.getElementById('search-courses-component')
);
