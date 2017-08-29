import React from 'react'
import SearchTag from './SearchTag'
import { TAGS_TO_DISPLAY, MEETING_DAYS } from '../constants'

const SearchTags = (props) => {
  const generateQueryTag = () => {
    if (props.q) {
      return <SearchTag propName='q' value={props.q} updateQueryParams={props.updateQueryParams}/>;
    }
  }

  const generateTopicsTags = () => {
    if (props.topic && props.topic.length > 0) {
      return(
        <div className='search-tags'>
          {
            props.topic.map((item, index) => {
              return <SearchTag propName='topic' value={item} key={index} updateQueryParams={props.updateQueryParams} />
            })
          }
        </div>
      )
    }
  }

  const generateLocationTag = () => {
    if (props.latitude && props.longitude) {
      const text = `Within ${props.distance}km of your current location`;
      return <SearchTag propName='location' value={text} updateQueryParams={props.updateQueryParams} />;
    } else if (props.city) {
      return <SearchTag propName='city' value={props.city} updateQueryParams={props.updateQueryParams} />;
    }
  }

  const generateMeetingDaysTags = () => {
    if (props.weekday && props.weekday.length > 0) {
      return(
        <div className='search-tags'>
          {
            props.weekday.map((day, index) => {
              const weekdayName = MEETING_DAYS[day];

              return <SearchTag propName='weekday' value={weekdayName} key={index} updateQueryParams={props.updateQueryParams} />
            })
          }
        </div>
      )
    }
  }

  return(
    <div className='search-tags'>
      {generateQueryTag()}
      {generateTopicsTags()}
      {generateLocationTag()}
      {generateMeetingDaysTags()}
    </div>
  )
}

export default SearchTags;