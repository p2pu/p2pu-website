import React from 'react'
import ReactDOM from 'react-dom'
import FacilitatorResources from './components/FacilitatorResources'
import DiscourseCommunity from './components/DiscourseCommunity'



ReactDOM.render(
  <FacilitatorResources />, document.getElementById('facilitator-resources')
);


ReactDOM.render(
  <DiscourseCommunity />, document.getElementById('discourse-community')
);

