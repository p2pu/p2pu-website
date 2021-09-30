import React from 'react';
import ReactDOM from 'react-dom';

import CommunityCalendar from './components/CommunityCalendar';
import 'p2pu-components/dist/build.css';

let elem = document.getElementById('community-calendar');

ReactDOM.render(
  <CommunityCalendar apiOrigin={elem.dataset.apiOrigin} />, document.getElementById('community-calendar')
);

