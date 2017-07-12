import React from 'react'
import SelectList from './SelectList'
import currencies from '../public/currencies.json'

class Container extends React.Component {
  constructor (props, context) {
    super(props, context);    
    this.state = { 
      localFullName: '',
      localCurrencySelected: '',
      localBanknotes: [],
      foreignFullName: '',
      foreignCurrencySelected: '',
      foreignBanknotes: [],
      currencies: currencies 
    }
    this.handleLocal = this.handleLocal.bind(this)
    this.handleForeign = this.handleForeign.bind(this)
  }

  handleLocal(event) {        
    this.setState({
      localCurrencySelected: event.target.value,
      localFullName: event.target.options[event.target.selectedIndex].text,
      localBanknotes: this.state.currencies.filter(v => v.code == event.target.value)[0].banknotes
    })    
  }

  handleForeign(event) {    
    this.setState({
      foreignCurrencySelected: event.target.value,
      foreignFullName: event.target.options[event.target.selectedIndex].text,
      foreignBanknotes: this.state.currencies.filter(v => v.code == event.target.value)[0].banknotes
    })    
  }
 
  render () {
    return (
      <div>        
        <div>
          {this.state.localCurrencySelected && <span>Converting from {this.state.localFullName}</span>}
          {this.state.foreignCurrencySelected && <span> to {this.state.foreignFullName}</span>}
        </div>
        
        <SelectList
          onChange={this.handleLocal} 
          currencies={this.state.currencies.filter(v => v.code !== this.state.foreignCurrencySelected)} 
          selected={this.state.localCurrencySelected}
          />

        {this.state.localCurrencySelected && <SelectList 
          onChange={this.handleForeign} 
          currencies={this.state.currencies.filter(v => v.code !== this.state.localCurrencySelected)} 
          selected={this.state.foreignCurrencySelected}
        />}
      </div>
    )
  }
}

export default Container
