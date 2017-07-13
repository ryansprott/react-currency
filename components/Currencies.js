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
    if (nextProps.localCurrencySelected && nextProps.foreignCurrencySelected) {
      fetch('https://api.fixer.io/latest?base=' + nextProps.localCurrencySelected + '&symbols=' + nextProps.foreignCurrencySelected)
      .then((resp) => {
        resp.json().then((data) => {
          var rate = data.rates[Object.keys(data.rates)[0]]
          this.setState({ rate: rate })
        })
      })
    }
  }

  render() {
    return(
      <div>
        <Currency 
          onChange={this.props.localHandler}
          selected={this.props.localCurrencySelected}
          other={this.props.foreignCurrencySelected}
          currencies={this.props.currencies.filter(v => v.code !== this.props.foreignCurrencySelected)} 
          banknotes={this.props.localBanknotes}
          displayNotes={this.props.localCurrencySelected && this.props.foreignCurrencySelected}
          rate={this.state.rate}
        />

        {this.props.localCurrencySelected && <Currency 
          onChange={this.props.foreignHandler} 
          selected={this.props.foreignCurrencySelected}
          other={this.props.localCurrencySelected}
          currencies={this.props.currencies.filter(v => v.code !== this.props.localCurrencySelected)} 
          banknotes={this.props.foreignBanknotes}
          displayNotes={this.props.localCurrencySelected && this.props.foreignCurrencySelected}
          rate={1/this.state.rate}
        />}
      </div>
    )
  }
}

Currencies.propTypes = {
  localHandler: PropTypes.func.isRequired,
  foreignHandler: PropTypes.func.isRequired,
  localCurrencySelected: PropTypes.string.isRequired,
  foreignCurrencySelected: PropTypes.string.isRequired,
  localBanknotes: PropTypes.array.isRequired,
  foreignBanknotes: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired
}

export default Currencies