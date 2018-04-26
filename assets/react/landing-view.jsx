import React from 'react'
import ReactDOM from 'react-dom'
import LearningCirclesStats from './components/Home/LearningCirclesStats'
import MeetingsPreview from './components/Home/MeetingsPreview'
import HeaderTextCarousel from './components/Home/HeaderTextCarousel'


ReactDOM.render(
  <HeaderTextCarousel />, document.getElementById('header-text-carousel')
);

ReactDOM.render(
  <LearningCirclesStats />, document.getElementById('stats')
);

ReactDOM.render(
  <MeetingsPreview />, document.getElementById('preview')
);


