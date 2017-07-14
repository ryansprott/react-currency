import React from 'react'
import Currencies from './Currencies'
import Banner from './Banner'
import currencyData from '../public/currencies.json'

class Container extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = { 
      localFullName: '',
      localCurrency: '',
      localBanknotes: [],
      foreignFullName: '',
      foreignCurrency: '',
      foreignBanknotes: [],
      currencyData: currencyData 
    }
    this.handleLocal   = this.handleLocal.bind(this)
    this.handleForeign = this.handleForeign.bind(this)
  }

  handleLocal(event) {        
    if (!event.target.value) return false
    this.setState({
      localCurrency: event.target.value,
      localFullName: event.target.options[event.target.selectedIndex].text,
      localBanknotes: this.state.currencyData.filter(v => v.code == event.target.value)[0].banknotes
    })    
  }

  handleForeign(event) {    
    if (!event.target.value) return false
    this.setState({
      foreignCurrency: event.target.value,
      foreignFullName: event.target.options[event.target.selectedIndex].text,
      foreignBanknotes: this.state.currencyData.filter(v => v.code == event.target.value)[0].banknotes
    })    
  }

  render () {
    return (
      <div className="container-fluid">        
        <Banner 
          localCurrency={this.state.localCurrency} 
          localFullName={this.state.localFullName} 
          foreignCurrency={this.state.foreignCurrency}           
          foreignFullName={this.state.foreignFullName} 
        />

        <Currencies 
          localHandler={this.handleLocal}
          localCurrency={this.state.localCurrency}
          localBanknotes={this.state.localBanknotes}
          foreignHandler={this.handleForeign}
          foreignCurrency={this.state.foreignCurrency}
          foreignBanknotes={this.state.foreignBanknotes}
          currencyData={this.state.currencyData}
        />
      </div>
    )
  }
}

export default Container
