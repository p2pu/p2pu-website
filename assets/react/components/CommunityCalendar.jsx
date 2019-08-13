import React from 'react';
import moment from 'moment';
import { API_BASE_URL } from '../constants'


const FeaturedCommunityEvent = ({event}) => {
  const eventDate = moment(event.local_datetime);

  return(
    <div className="featured-event bg-dark mt-2 mb-5 pb-5">
      <div className="container">
        <div className="d-flex justify-content-end">
          <div className="featured-tag p-2">
            <span>Next event:</span><span className="bold">{eventDate.format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <div className="row">
          {
            event.image &&
            <div className="col-md-4">
              <img src={event.image} className="img-fluid rounded" />
            </div>
          }

          <div className="col-md-8">
            <div className="event-card d-block d-md-flex">
              <div className='info'>
                <h2 className='card-title text-white'>{event.title}</h2>
                <div className="minicaps text-left text-muted bold mb-3">
                  <span>{`${eventDate.format('LT')}`}</span>
                  { event.city && <span>{` | ${event.city}`}</span> }
                  <span>{` | Added by ${event.created_by.first_name}`}</span>
                </div>
                <p className='card-text text-white'>{event.description}</p>
                <a href={event.link} className="p2pu-btn btn-primary blue" target="_blank" rel="nofollow">More info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CommunityEvent = ({event}) => {
  const eventDate = moment(event.local_datetime);

  return(
    <div className="card mb-4">
      <div className="event-card d-block d-md-flex">
        <div className='date p-3'>
          <div className="day">
            {eventDate.format('DD')}
          </div>
          <div className="month-year">
            <div className="month">
              {eventDate.format('MMM')}
            </div>
            <div className="year">
              {eventDate.format('YYYY')}
            </div>
          </div>
        </div>

        <div className='info p-3'>
          <div className="minicaps text-left text-muted bold">
            <span>{`${eventDate.format('LT')}`}</span>
            { event.city && <span>{` | ${event.city}`}</span> }
            <span>{` | Added by ${event.created_by.first_name}`}</span>
          </div>
          <h4 className='card-title'>{event.title}</h4>
          <p className='card-text'>{event.description}</p>
        </div>

        <div className='actions p-3'>
          <a href={event.link} className="p2pu-btn btn-primary blue" target="_blank" rel="nofollow">More info</a>
        </div>
      </div>
    </div>
  )
}

class CommunityCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    let apiUrl = `${API_BASE_URL}/api/community_calendar/events/?format=json`
    fetch(apiUrl).then( resp => resp.json()).then( data => {
      console.log(data.results)
      this.setState({events: data.results});
    });
  }

  render(){
    if (this.state.events.length === 0) {
      return (
        <div className="container">
          <p>No events at this time.</p>
        </div>
      )
    }

    const nextEvent = { ...this.state.events[0] };
    const eventList = [ ...this.state.events.slice(1) ]

    return (
      <div>
        <FeaturedCommunityEvent event={nextEvent} />
        <div className="container mb-5">
          {eventList.map( event => <CommunityEvent event={event} key={event.title} />)}
        </div>
      </div>
    );
  }
}

export default CommunityCalendar;
