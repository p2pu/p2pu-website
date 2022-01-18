import React from 'react';
import ReactDOM from 'react-dom';
import { SearchProvider, SearchCourses, BrowseCourses } from 'p2pu-components'

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
    <SearchCourses 
      Browse={BrowseCourses}
    />
  </SearchProvider>, document.getElementById('search-courses-component')
);
