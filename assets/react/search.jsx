import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import { Search, BrowseLearningCircles } from 'p2pu-search-cards';

import 'p2pu-search-cards/dist/build.css';

let elem = document.getElementById('search-lc-component');

let initialState = {}
if (elem.dataset.teamId) {
  initialState["team_id"] = elem.dataset.teamId
}

ReactDOM.render(
  <Search
    initialState={initialState}
    searchSubject={'learningCircles'}
    Browse={BrowseLearningCircles}
  />, document.getElementById('search-lc-component')
);

