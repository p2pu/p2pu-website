import React from 'react';
import ReactDOM from 'react-dom';
import { Search, BrowseLearningCircles } from 'p2pu-components';

import 'p2pu-components/dist/build.css';

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
    origin={"http://localhost:8000"}
  />, document.getElementById('search-lc-component')
);

