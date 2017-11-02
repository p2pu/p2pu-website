import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Masonry from 'react-masonry-component'
import MeetingCard from './MeetingCard.jsx'
import moment from 'moment'
import  { MEETING_DAYS } from '../constants'

const BrowseMeetings = (props) => {
  const generateFormattedMeetingDate = (nextMeeting) => {
    if (moment().isSame(nextMeeting, 'day')) {
      return 'Today'
    } else if (moment().add(1, 'day').isSame(nextMeeting, 'day')) {
      return 'Tomorrow'
    } else {
      return nextMeeting.format('dddd, MMM Do')
    }
  }

  return (
    <div className={`meetings ${props.classes}`}>
      {
        props.meetings.map((meeting, index) => {
          const nextMeeting = moment(`${meeting.next_meeting_date} ${meeting.meeting_time}`);
          const formattedMeetingDate = generateFormattedMeetingDate(nextMeeting);
          const formattedStartTime = nextMeeting.format('h:mma');
          const formattedCity = meeting.city.replace(/United States of America/, 'USA')

          return(
            <MeetingCard
              key={index}
              title={ meeting.course.title }
              date={formattedMeetingDate}
              time={formattedStartTime}
              facilitator={ meeting.facilitator }
              location={ meeting.venue }
              city={ formattedCity }
            />
          )
        })
      }
    </div>
  );
}

export default BrowseMeetings
