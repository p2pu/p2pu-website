import React, { Component } from 'react'

const NumberWithLabel = (props) => {

  return (
    <div className="stat">
      <div className="number" data-value={ props.number }>
        { props.number }
      </div>

      <div className='text'>
        { props.label }
      </div>
    </div>
  );
}

export default NumberWithLabel
