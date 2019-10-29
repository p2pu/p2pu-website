import React from 'react';
import ReactDOM from 'react-dom';
import { Search, BrowseCourses } from 'p2pu-search-cards';

import 'p2pu-search-cards/dist/build.css';

const handleSelectResult = course => {
  const selectCourse = `https://learningcircles.p2pu.org/en/studygroup/create/?course_id=${course.id}`;
  window.location.href = selectCourse;
}

ReactDOM.render(
  <Search
    searchSubject={'courses'}
    Browse={BrowseCourses}
    onSelectResult={handleSelectResult}
    initialState={{languages:['en']}}
  />, document.getElementById('search-courses-component')
);
