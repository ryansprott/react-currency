import React, {PropTypes} from 'react';

const SelectList = ({currencyData, onChange, thisCurrency = ''}) => {
  return (    
    <div className="form-group">
      <select className="form-control" value={thisCurrency} onChange={onChange}>
        <option value="">Select a currency...</option>
        {currencyData.map((currency, i) => {
          return <option key={i} value={currency.code}>{currency.full_name}</option>
        })}
      </select>
    </div>
  )
}

SelectList.propTypes = {
  currencyData: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  thisCurrency: PropTypes.string.isRequired
}

export default SelectList
