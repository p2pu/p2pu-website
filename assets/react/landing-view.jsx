import React from 'react'
import ReactDOM from 'react-dom'
import LearningCircles from './components/learning-circles'
import HeaderTextCarousel from './components/HeaderTextCarousel'


ReactDOM.render(
  <HeaderTextCarousel />, document.getElementById('header-text-carousel')
);

ReactDOM.render(
  <LearningCircles />, document.getElementById('learning-circles-browse')
);

