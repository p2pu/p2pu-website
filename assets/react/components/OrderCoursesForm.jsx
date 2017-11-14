import React, { Component } from 'react'
import SwitchButton from 'react-switch-button/dist/react-switch-button'
import css from 'react-switch-button/dist/react-switch-button.css'

const OrderCoursesForm = (props) => {
  const formValues = {
    true: {
      label: 'Use in learning circles',
      value: 'usage'
    },
    false: {
      label: 'Course title',
      value: 'title'
    }
  }

  const handleSelect = (e) => {
    const order = formValues[e.currentTarget.checked].value
    props.updateQueryParams({ order })
  }

  const defaultChecked = props.order && props.order === formValues.true.value;

  return(
    <SwitchButton
      name="order-courses"
      label="Switch mode"
      mode="select"
      labelRight={formValues.true.label}
      label={formValues.false.label}
      onChange={handleSelect}
      defaultChecked={defaultChecked}
    />
  )
}

export default OrderCoursesForm;
