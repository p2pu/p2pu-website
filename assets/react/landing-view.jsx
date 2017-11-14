import React from 'react'
import ReactDOM from 'react-dom'
import LearningCirclesStats from './components/LearningCirclesStats'
import MeetingsPreview from './components/MeetingsPreview'
import HeaderTextCarousel from './components/HeaderTextCarousel'


ReactDOM.render(
  <HeaderTextCarousel />, document.getElementById('header-text-carousel')
);

ReactDOM.render(
  <LearningCirclesStats />, document.getElementById('stats')
);

ReactDOM.render(
  <MeetingsPreview />, document.getElementById('preview')
);


