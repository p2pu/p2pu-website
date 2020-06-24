import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import { Search, BrowseLearningCircles } from 'p2pu-search-cards';

import 'p2pu-search-cards/dist/build.css';

let elem = document.getElementById('search-lc-component');

ReactDOM.render(
  <Search
    searchSubject={'learningCircles'}
    Browse={BrowseLearningCircles}
  />, document.getElementById('search-lc-component')
);

