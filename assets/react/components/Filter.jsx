import React from 'react'

const Filter = ({filter, active, updateActiveFilter}) => {
  const filterNames = {
    'location': 'Location',
    'courses': 'Courses',
    'startDate': 'Start Date'
  }

  const iconName = active ? 'remove' : 'add'

  const activeClass = active ? 'active' : ''

  const handleClick = () => {
    const newValue = active ? '' : filter
    updateActiveFilter(newValue)
  }

  return(
    <div className={`filter ${activeClass}`} onClick={handleClick} >
      {filterNames[filter]}
      <i className="material-icons">{iconName}</i>
    </div>
  )
}

export default Filter;