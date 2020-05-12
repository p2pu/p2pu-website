import React from 'react';
import ReactDOM from 'react-dom';
import TeamInfo from './components/TeamInfo';

const el = document.getElementById("team-collapsible")
const teamData = JSON.parse(document.getElementById('team-data').textContent);

ReactDOM.render(
  <TeamInfo teamData={teamData} />, el
);
