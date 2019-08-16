import React from 'react'
import moment from 'moment'

import MeetingCard from './MeetingCard.jsx'
import { MEETING_DAYS } from '../../constants'

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
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    swipe: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
      },
    ]
  }

  return (
    <div>
      {
        props.meetings.map((meeting, index) => {
          const nextMeeting = moment(`${meeting.next_meeting_date} ${meeting.meeting_time}`);
          const formattedMeetingDate = generateFormattedMeetingDate(nextMeeting);
          const formattedStartTime = nextMeeting.format('h:mma');
          const formattedCity = meeting.city.replace(/United States of America/, 'USA')

          return(
            <div key={index}>
              <MeetingCard
                title={ meeting.course.title }
                date={formattedMeetingDate}
                time={formattedStartTime}
                facilitator={ meeting.facilitator }
                location={ meeting.venue }
                city={ formattedCity }
                url={ meeting.url }
              />
            </div>
          )
        })
      }
    </div>
  );
}

export default BrowseMeetings
