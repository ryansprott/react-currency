import React from 'react'
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
      <BankNotes 
        banknotes={this.props.banknotes} 
        selected={this.props.selected}
      />
      </div>
    )
  }
}

export default Currency
