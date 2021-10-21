import React from 'react'
import ReactDOM from 'react-dom'
import NavAccount from './components/NavAccount'

let elem = document.getElementById('nav-account');

ReactDOM.render(
  <NavAccount apiOrigin={elem.dataset.apiOrigin} />, document.getElementById('nav-account')
);

