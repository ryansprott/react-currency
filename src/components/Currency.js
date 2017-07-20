import React from 'react'
import PropTypes from 'prop-types'
import SelectList from './SelectList'
import BankNotes from './BankNotes'

class Currency extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return(
      <div>
      <SelectList
        onChange={this.props.onChange} 
        currencyData={this.props.currencyData}
        thisCurrency={this.props.thisCurrency}
      />
      
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
