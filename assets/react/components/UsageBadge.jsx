import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const UsageBadge = ({ number }) => {
  const display = number > 0
  const pluralizedText = number === 1 ? 'learning circle' : 'learning circles';

  if (display) {
    return (
      <div className='usage-badge'>
        <div className='text'>
          Used by <span className='big'>{number}</span> {pluralizedText}
        </div>
      </div>
    );
  } else {
    return null
  }

}

export default UsageBadge
