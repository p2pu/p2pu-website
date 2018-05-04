import React from 'react';
import ReactDOM from 'react-dom';
import { Search, BrowseLearningCircles } from 'p2pu-search-cards';


ReactDOM.render(
  <Search
    searchSubject={'learningCircles'}
    Browse={BrowseLearningCircles}
  />, document.getElementById('search-lc-component')
);

