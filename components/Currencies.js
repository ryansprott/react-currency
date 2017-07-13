import React from 'react'
import PropTypes from 'prop-types'
import Currency from './Currency'

class Currencies extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      rate: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    var local   = nextProps.localCurrency
    var foreign = nextProps.foreignCurrency
    if (local && foreign) {
      $.blockUI()
      fetch('https://api.fixer.io/latest?base=' + local + '&symbols=' + foreign)
      .then((resp) => {
        resp.json().then((data) => {          
          var rate = data.rates[Object.keys(data.rates)[0]]
          this.setState({ rate: rate })         
          $.unblockUI()          
        })
      })
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col-sm-6">
          <Currency 
            onChange={this.props.localHandler}
            thisCurrency={this.props.localCurrency}
            otherCurrency={this.props.foreignCurrency}
            currencyData={this.props.currencyData.filter(v => v.code !== this.props.foreignCurrency)} 
            banknotes={this.props.localBanknotes}
            displayBanknotes={this.props.localCurrency && this.props.foreignCurrency}
            rate={this.state.rate}
          />
        </div>

        <div className="col-sm-6">
          {this.props.localCurrency && <Currency 
            onChange={this.props.foreignHandler} 
            thisCurrency={this.props.foreignCurrency}
            otherCurrency={this.props.localCurrency}
            currencyData={this.props.currencyData.filter(v => v.code !== this.props.localCurrency)} 
            banknotes={this.props.foreignBanknotes}
            displayBanknotes={this.props.localCurrency && this.props.foreignCurrency}
            rate={1/this.state.rate}
          />}
        </div>
      </div>
    )
  }
}

Currencies.propTypes = {
  localHandler: PropTypes.func.isRequired,
  localCurrency: PropTypes.string.isRequired,
  localBanknotes: PropTypes.array.isRequired,
  foreignHandler: PropTypes.func.isRequired,
  foreignCurrency: PropTypes.string.isRequired,
  foreignBanknotes: PropTypes.array.isRequired,
  currencyData: PropTypes.array.isRequired
}

export default Currencies