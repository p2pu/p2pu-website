import React, { Component } from 'react'

const NumberWithLabel = (props) => {

  return (
    <div className="stat">
      <div className="number">
        <h4 className="title">{ props.number }</h4>
      </div>

      <div className='label'>
        { props.label }
      </div>
    </div>
  );
}

export default NumberWithLabel
