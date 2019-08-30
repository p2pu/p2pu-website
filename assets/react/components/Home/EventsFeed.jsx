import React from 'react';
import moment from 'moment';
import { API_BASE_URL } from '../../constants'


const CommunityEvent = ({event}) => {
  const eventDate = moment(event.local_datetime);
  const descriptionPreview = event.description.substring(0,100)

  return(
    <div className="meeting-card">
      <a href={event.link} target="_blank" className="undecorated">
        <div className="content">
          <div className="date">
            <i className="material-icons">today</i>
            <p><span className="bold">{eventDate.format("DD, MMM, YYYY")}</span> at <span className="bold">{`${eventDate.format('LT')}`}</span>{ event.city && <span>{` in ${event.city}`}</span> }</p>
          </div>
          <div className="info">
            <p className='mb-0'><span className="bold">{`${event.title}`}</span><span>{` | ${descriptionPreview} ...`}</span></p>
          </div>
        </div>
      </a>
    </div>
  )
}

class EventsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    let apiUrl = `${API_BASE_URL}/api/community_calendar/events/?format=json&limit=3`
    fetch(apiUrl).then( resp => resp.json()).then( data => {
      this.setState({events: data.results});
    });
  }

  render(){
    if (this.state.events.length === 0) {
      return (
        <div />
      )
    }

    return (
      <div className="events-feed">
        <h5 className="mt-0 mb-2">Upcoming events</h5>
        {this.state.events.map( event => <CommunityEvent event={event} key={event.title} />)}
      </div>
    );
  }
}

export default EventsFeed;