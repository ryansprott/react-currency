import React from 'react'
import SelectList from './SelectList'
import currencies from '../public/currencies.json'

class Container extends React.Component {
  constructor (props, context) {
    super(props, context);    
    this.state = { 
      headline: 'Select a local currency...',
      currencies: currencies 
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    //var foo = currencies.filter(v => v.code !== event.target.value)      
    this.setState({ headline: event.target.options[event.target.selectedIndex].text })
  }

  render () {
    return (
      <div>        
        <h1>{this.state.headline}</h1>
        <SelectList
          onChange={this.handleChange} 
          currencies={this.state.currencies} />
      </div>
    )
  }
}

export default Container
