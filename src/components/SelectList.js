import React from 'react'
import PropTypes from 'prop-types'

const SelectList = ({data, onChange, placeholder, createOptions, selected}) => {
  return (    
    <select className="form-control" value={selected} onChange={onChange}>
      <option value="">{placeholder}</option>
      {createOptions(data)}
    </select>
  )
}

SelectList.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  createOptions: PropTypes.func,
  selected: PropTypes.string
}

export default SelectList
