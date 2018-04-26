import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search/Search'
import BrowseLearningCircles from './components/Search/LearningCircles/Browse'

ReactDOM.render(
  <Search
    searchSubject={'learningCircles'}
    Browse={BrowseLearningCircles}
  />, document.getElementById('search-lc-component')
);

