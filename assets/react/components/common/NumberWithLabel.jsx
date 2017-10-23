import React, { Component } from 'react'
import CountUp from 'react-countup';

const NumberWithLabel = (props) => {

  return (
    <div className="stat">
      <div className="number">
        <CountUp start={ 0 } end={ props.number } useEasing={true} />
      </div>

      <div className='label'>
        { props.label }
      </div>
    </div>
  );
}

export default NumberWithLabel
