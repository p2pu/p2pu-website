import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search/Search'
import BrowseCourses from './components/Search/Courses/Browse'

ReactDOM.render(
  <Search
    searchSubject={'courses'}
    Browse={BrowseCourses}
  />, document.getElementById('search-courses-component')
);

