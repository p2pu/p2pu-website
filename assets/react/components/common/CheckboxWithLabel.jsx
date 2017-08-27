import React from 'react'

const CheckboxWithLabel = ({ name, classes, label, handleChange }) => {
  const onChange = (e) => {
    handleChange(e.currentTarget.checked)
  }

  return(
    <div className={`checkbox-with-label label-right ${classes}`} >
      <input type="checkbox" name={name} id={name} onChange={onChange} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default CheckboxWithLabel;