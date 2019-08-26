import React from 'react'
import ReactDOM from 'react-dom'
import LearningCirclesStats from './components/Home/LearningCirclesStats'
import MeetingsPreview from './components/Home/MeetingsPreview'
import EventsFeed from './components/Home/EventsFeed'
import TeamsFeed from './components/Home/TeamsFeed'
import HeaderTextCarousel from './components/Home/HeaderTextCarousel'
import DiscourseCommunity from './components/Home/DiscourseCommunity'



ReactDOM.render(
  <HeaderTextCarousel />, document.getElementById('header-text-carousel')
);

ReactDOM.render(
  <LearningCirclesStats />, document.getElementById('stats')
);

ReactDOM.render(
  <MeetingsPreview />, document.getElementById('meetings-feed')
);

ReactDOM.render(
  <DiscourseCommunity discourse_path={'/latest.json'} />, document.getElementById('discourse-community')
);

ReactDOM.render(
  <EventsFeed />, document.getElementById('events-feed')
);

ReactDOM.render(
  <TeamsFeed />, document.getElementById('teams-feed')
);


