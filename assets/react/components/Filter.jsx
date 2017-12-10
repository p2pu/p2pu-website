import React from 'react'

const Filter = ({filter, active, updateActiveFilter}) => {
  const filterNames = {
    'location': 'Location',
    'topics': 'Topics',
    'meetingDays': 'Meeting Day(s)',
    'orderCourses': 'Order by'
  }

  const iconName = active ? 'remove' : 'add'

  const activeClass = active ? 'active' : ''

  const handleClick = () => {
    const newValue = active ? '' : filter
    updateActiveFilter(newValue)
  }

  return(
    <div className={`filter ${activeClass}`} onClick={handleClick} >
      <button className='p2pu-btn light'>
        {filterNames[filter]}
        <i className="material-icons">{iconName}</i>
      </button>
    </div>
  )
}

export default Filter;