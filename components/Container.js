import React from 'react'
import Currency from './Currency'
import Banner from './Banner'
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
    if (!event.target.value) return false
    this.setState({
      localCurrencySelected: event.target.value,
      localFullName: event.target.options[event.target.selectedIndex].text,
      localBanknotes: this.state.currencies.filter(v => v.code == event.target.value)[0].banknotes
    })    
  }

  handleForeign(event) {    
    if (!event.target.value) return false
    this.setState({
      foreignCurrencySelected: event.target.value,
      foreignFullName: event.target.options[event.target.selectedIndex].text,
      foreignBanknotes: this.state.currencies.filter(v => v.code == event.target.value)[0].banknotes
    })    
  }
 
  render () {
    return (
      <div>        
        <Banner 
          localCurrency={this.state.localCurrencySelected} 
          foreignCurrency={this.state.foreignCurrencySelected}           
          localFullName={this.state.localFullName} 
          foreignFullName={this.state.foreignFullName} 
        />

        <Currency 
          onChange={this.handleLocal} 
          currencies={this.state.currencies.filter(v => v.code !== this.state.foreignCurrencySelected)} 
          selected={this.state.localCurrencySelected}
          banknotes={this.state.localBanknotes}
        />
        
        {this.state.localCurrencySelected && <Currency 
          onChange={this.handleForeign} 
          currencies={this.state.currencies.filter(v => v.code !== this.state.localCurrencySelected)} 
          selected={this.state.foreignCurrencySelected}
          banknotes={this.state.foreignBanknotes}
        />}
      </div>
    )
  }
}

export default Container
