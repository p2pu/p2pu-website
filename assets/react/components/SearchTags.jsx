import React from 'react'
import SearchTag from './SearchTag'
import { TAGS_TO_DISPLAY, MEETING_DAYS } from '../constants'
import _ from 'lodash'

const SearchTags = (props) => {
  const generateQueryTag = () => {
    if (props.q) {
      const onDelete = (value) => { props.updateQueryParams({ q: null }) }
      return <SearchTag value={props.q} onDelete={onDelete} />;
    }
  }

  const generateTopicsTags = () => {
    if (props.topics && props.topics.length > 0) {
      const onDelete = (value) => {
        props.updateQueryParams({ topics: _.without(props.topics, value) })
      }

      return(
        <div className='search-tags'>
          {
            props.topics.map((item, index) => {
              return <SearchTag value={item} key={index} onDelete={onDelete} />
            })
          }
        </div>
      )
    }
  }

  const generateLocationTag = () => {
    if (props.latitude && props.longitude) {
      const text = `Within ${props.distance}km of your current location`;
      const onDelete = (value) => {
        props.updateQueryParams({ latitude: null, longitude: null, distance: 50 })
      }
      return <SearchTag value={text} onDelete={onDelete} />;
    } else if (props.city) {
      const onDelete = (value) => {
        props.updateQueryParams({ city: null })
      }
      return <SearchTag value={props.city} updateQueryParams={props.updateQueryParams} />;
    }
  }

  const generateMeetingDaysTags = () => {
    if (props.weekdays && props.weekdays.length > 0) {

      const onDelete = (day) => {
        const dayIndex = MEETING_DAYS.indexOf(day);
        props.updateQueryParams({ weekdays: _.without(props.weekdays, dayIndex) })
      }

      return(
        <div className='search-tags'>
          {
            props.weekdays.map((dayIndex, index) => {
              const weekdayName = MEETING_DAYS[dayIndex];

              return <SearchTag value={weekdayName} key={index} onDelete={onDelete} />
            })
          }
        </div>
      )
    }
  }

  return(
    <div className='search-tags wrapper'>
      {generateQueryTag()}
      {generateTopicsTags()}
      {generateLocationTag()}
      {generateMeetingDaysTags()}
    </div>
  )
}

export default SearchTags;