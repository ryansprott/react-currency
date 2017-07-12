import React, {PropTypes} from 'react';

const SelectList = ({currencies, onChange, selected = ''}) => {
  return (    
    <select value={selected} onChange={onChange}>
      <option value="">Select a currency...</option>
      {currencies.map((currency, i) => {
        return <option key={i} value={currency.code}>{currency.full_name}</option>
      })}
    </select>
  )
}

SelectList.propTypes = {
  currencies: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string
}

export default SelectList
