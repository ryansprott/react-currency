import React, {PropTypes} from 'react'
import Currency from './Currency'

class Currencies extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      rate: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    var local = nextProps.localCurrency
    var foreign = nextProps.foreignCurrencySelected
    if (local && foreign) {
      fetch('https://api.fixer.io/latest?base=' + local + '&symbols=' + foreign)
      .then((resp) => {
        console.log("waiting")
        resp.json().then((data) => {          
          var rate = data.rates[Object.keys(data.rates)[0]]
          this.setState({ rate: rate })
          console.log("done")
        })
      })
    }
  }

  render() {
    return(
      <div>
        <Currency 
          onChange={this.props.localHandler}
          selected={this.props.localCurrency}
          other={this.props.foreignCurrencySelected}
          currencies={this.props.currencies.filter(v => v.code !== this.props.foreignCurrencySelected)} 
          banknotes={this.props.localBanknotes}
          displayNotes={this.props.localCurrency && this.props.foreignCurrencySelected}
          rate={this.state.rate}
        />

        {this.props.localCurrency && <Currency 
          onChange={this.props.foreignHandler} 
          selected={this.props.foreignCurrencySelected}
          other={this.props.localCurrency}
          currencies={this.props.currencies.filter(v => v.code !== this.props.localCurrency)} 
          banknotes={this.props.foreignBanknotes}
          displayNotes={this.props.localCurrency && this.props.foreignCurrencySelected}
          rate={1/this.state.rate}
        />}
      </div>
    )
  }
}

Currencies.propTypes = {
  localHandler: PropTypes.func.isRequired,
  foreignHandler: PropTypes.func.isRequired,
  localCurrency: PropTypes.string.isRequired,
  foreignCurrencySelected: PropTypes.string.isRequired,
  localBanknotes: PropTypes.array.isRequired,
  foreignBanknotes: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired
}

export default Currencies