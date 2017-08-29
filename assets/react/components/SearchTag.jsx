import React from 'react'

const SearchTag = ({ propName, value, updateQueryParams }) => {
  const generateClickHandler = (propName, value) => {
    return (e) => {
      console.log(propName, value)
      switch (propName) {
        case 'location':
        updateQueryParams({ latitude: null, longitude: null, distance: 50 });
        break;
        case 'topic':
        updateQueryParams({ topic: [] });
        break;
        case 'weekday':
        updateQueryParams({ weekday: [] });
        break;
        default:
        updateQueryParams({ [propName]: null })
        break;
      }
    }
  }

  return(
    <div className='search-tag'>
      {value}
      <i className="material-icons" onClick={generateClickHandler(propName, value)}>clear</i>
    </div>
  )
}

export default SearchTag;