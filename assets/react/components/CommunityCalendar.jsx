import React from 'react';


const CommunityEvent = ({event}) => (
  <div class="card">
    { event.image && <img src={event.image} class="card-img-top" alt="image of event" /> }
    <div class='card-body'>
      <h5 class='card-title'>{event.title}</h5>
      <p class='card-text'>{event.local_datetime}</p>
      <p class='card-text'>{event.description}</p>
      <a href={event.link} class="btn btn-primary" target="_blank" rel="nofollow" >More info</a>
    </div>
  </div>
);

class CommunityCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    let apiUrl = 'http://localhost:8000/api/community_calendar/events/?format=json'
    fetch(apiUrl).then( resp => resp.json()).then( data => {
      this.setState({events: data.results});
    });
  }

  render(){
    return (
      <div>
        <h2>Things happening in the P2PU community</h2>
        <div class="card-deck">
          {this.state.events.map( event => <CommunityEvent event={event} />)}
        </div>
      </div>
    );
  }
}

export default CommunityCalendar;
