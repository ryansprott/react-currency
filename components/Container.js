import React from 'react'
import Currencies from './Currencies'
import Banner from './Banner'
import currencies from '../public/currencies.json'

class Container extends React.Component {
  constructor (props, context) {
    super(props, context);    
    this.state = { 
      localFullName: '',
      localCurrency: '',
      localBanknotes: [],
      foreignFullName: '',
      foreignCurrency: '',
      foreignBanknotes: [],
      currencies: currencies 
    }
    this.handleLocal = this.handleLocal.bind(this)
    this.handleForeign = this.handleForeign.bind(this)
  }

  handleLocal(event) {        
    if (!event.target.value) return false
    this.setState({
      localCurrency: event.target.value,
      localFullName: event.target.options[event.target.selectedIndex].text,
      localBanknotes: this.state.currencies.filter(v => v.code == event.target.value)[0].banknotes
    })    
  }

  handleForeign(event) {    
    if (!event.target.value) return false
    this.setState({
      foreignCurrency: event.target.value,
      foreignFullName: event.target.options[event.target.selectedIndex].text,
      foreignBanknotes: this.state.currencies.filter(v => v.code == event.target.value)[0].banknotes
    })    
  }

  render () {
    return (
      <div>        
        <Banner 
          localCurrency={this.state.localCurrency} 
          foreignCurrency={this.state.foreignCurrency}           
          localFullName={this.state.localFullName} 
          foreignFullName={this.state.foreignFullName} 
        />

        <Currencies 
          localHandler={this.handleLocal}
          foreignHandler={this.handleForeign}
          localCurrency={this.state.localCurrency}
          foreignCurrencySelected={this.state.foreignCurrency}
          localBanknotes={this.state.localBanknotes}
          foreignBanknotes={this.state.foreignBanknotes}
          currencies={this.state.currencies}
        />
      </div>
    )
  }
}

export default Container
