import React, {PropTypes} from 'react';

const SelectList = ({currencyData, onChange, thisCurrency = ''}) => {
  return (    
    <select value={thisCurrency} onChange={onChange}>
      <option value="">Select a currency...</option>
      {currencyData.map((currency, i) => {
        return <option key={i} value={currency.code}>{currency.full_name}</option>
      })}
    </select>
  )
}

SelectList.propTypes = {
  currencyData: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  thisCurrency: PropTypes.string.isRequired
}

export default SelectList
