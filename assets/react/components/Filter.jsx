import React from 'react'


const Filter = ({filter, activeFilter, updateActiveFilter}) => {
  const filterNames = {
    'location': 'Location',
    'courses': 'Courses',
    'startDate': 'Start Date'
  }

  const generateFilterIcon = (filter) => {
    if (activeFilter === filter) {
      return <i className="material-icons">remove</i>;
    } else {
      return <i className="material-icons">add</i>;
    }
  }

  const handleClick = () => {
    if (filter === activeFilter) {
      updateActiveFilter('')
    } else {
      updateActiveFilter(filter)
    }
  }

  return(
    <div className="filter" onClick={handleClick} >
      {filterNames[filter]}
      {generateFilterIcon(filter)}
    </div>
  )
}

export default Filter;