import React from 'react'
import PropTypes from 'prop-types'
import SelectList from './SelectList'
import BankNotes from './BankNotes'

class Currency extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  createOptions(data) {
    return(data.map((currency, i) => {
      return <option key={i} value={currency.code}>{currency.full_name}</option>
    }))
  }

  render() {
    return(
      <div>
        <div className="form-group">
          <SelectList
            onChange={this.props.onChange} 
            data={this.props.currencyData}
            selected={this.props.thisCurrency}
            createOptions={this.createOptions}
            placeholder="Select a currency..."
          />
        </div>
      
      {this.props.displayBanknotes && <BankNotes 
        banknotes={this.props.banknotes} 
        thisCurrency={this.props.thisCurrency}
        otherCurrency={this.props.otherCurrency}
        rate={this.props.rate}
      />}
      </div>
    )
  }
}

Currency.propTypes = {
  onChange: PropTypes.func.isRequired,
  thisCurrency: PropTypes.string.isRequired,
  otherCurrency: PropTypes.string.isRequired,
  currencyData: PropTypes.array.isRequired,
  banknotes: PropTypes.array.isRequired,
  displayBanknotes: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
}

export default Currency
