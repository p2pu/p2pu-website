import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';

import CommunityCalendar from './components/CommunityCalendar';

import 'p2pu-search-cards/dist/build.css';

ReactDOM.render(
  <CommunityCalendar/>, document.getElementById('community-calendar')
);

