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
    if (props.weekday && props.weekday.length > 0) {

      const onDelete = (value) => {
        props.updateQueryParams({ weekday: _.without(props.weekday, value) })
      }

      return(
        <div className='search-tags'>
          {
            props.weekday.map((day, index) => {
              const weekdayName = MEETING_DAYS[day];

              return <SearchTag propName='weekday' value={weekdayName} key={index} onDelete={onDelete} />
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