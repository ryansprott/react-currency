import React, {PropTypes} from 'react'
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
        currencies={this.props.currencies}
        selected={this.props.selected}
      />
      {this.props.displayNotes && <BankNotes 
        banknotes={this.props.banknotes} 
        selected={this.props.selected}
        rate={this.props.rate}
      />}
      </div>
    )
  }
}

Currency.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  banknotes: PropTypes.array.isRequired,
  displayNotes: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
}

export default Currency
