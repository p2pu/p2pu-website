import React from 'react';
import ReactDOM from 'react-dom';
import SearchProvider from 'p2pu-components/dist/Search/SearchProvider';
import LearningCircleSearch from 'p2pu-components/dist/LearningCircles/LearningCircleSearch';
import 'p2pu-components/dist/build.css';


let elem = document.getElementById('search-lc-component');
let initialState = {}
if (elem.dataset.teamId) {
  initialState["team_id"] = elem.dataset.teamId
}
if (elem.dataset.cuCredit) {
  initialState["cu_credit"] = true;
}
//TODO let origin = elem.dataset.apiOrigin;
let origin = 'https://learningcircles.p2pu.org';

ReactDOM.render(
  <SearchProvider
    initialState={initialState}
    searchSubject={'learningCircles'}
    origin={origin}
    contact={ elem.dataset.teamContact ? elem.dataset.teamContact : null }
    defaultImageUrl="/assets/images/p2pu-ogimg-default.jpg">
    <LearningCircleSearch />
  </SearchProvider>, document.getElementById('search-lc-component')
);
