import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './components/Contact'

const elem = document.getElementById('contact-form');
const origin = elem.dataset.apiOrigin;

ReactDOM.render(
  <Contact 
    apiOrigin={elem.dataset.apiOrigin}
    sourceUrl={elem.dataset.sourceUrl}
    organization={elem.dataset.organization}
  />,
  elem
);
