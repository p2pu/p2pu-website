import React, { Component } from 'react'

const NumberWithLabel = (props) => {

  return (
    <div className="stat">
      <span className="number" data-value={ props.number }>
        { props.number }
      </span>

      <span className='text'>
        { props.label }
      </span>
    </div>
  );
}

export default NumberWithLabel
