import React from 'react'
import Slider from 'react-rangeslider'
import css from 'react-rangeslider/lib/index.css'

const RangeSliderWithLabel = (props) => {
  return (
    <div className={`range-slider-with-label label-left ${props.classes}`} >
      <label htmlFor={props.name}>{props.label}</label>
      <Slider
        value={props.value}
        name={props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default RangeSliderWithLabel;