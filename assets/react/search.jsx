import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import { Search, BrowseLearningCircles } from 'p2pu-search-cards';

import 'p2pu-search-cards/dist/build.css';

let initialState = {}
const parsedParams = queryString.parse(window.location.search);
if (parsedParams.team_id) {
  initialState["team_id"] = parsedParams.team_id
}

ReactDOM.render(
  <Search
    initialState={initialState}
    searchSubject={'learningCircles'}
    Browse={BrowseLearningCircles}
  />, document.getElementById('search-lc-component')
);

