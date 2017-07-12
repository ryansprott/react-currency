import React, {PropTypes} from 'react';

const SelectList = ({currencies, onChange}) => {
  return (    
    <select onChange={onChange}>
      <option value="">Select a local currency...</option>
      {currencies.map((currency, i) => {
        return <option key={i} value={currency.code}>{currency.full_name}</option>
      })}
    </select>
  )
}

SelectList.propTypes = {
  currencies: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectList
