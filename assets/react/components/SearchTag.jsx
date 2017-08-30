import React from 'react'

const SearchTag = ({ propName, value, onDelete }) => {
  return(
    <div className='search-tag'>
      {value}
      <i className="material-icons" onClick={ () => onDelete(value) }>clear</i>
    </div>
  )
}

export default SearchTag;