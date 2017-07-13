import React from 'react';
import PropTypes from 'prop-types'

const Banner = ({localCurrency, foreignCurrency, localFullName, foreignFullName}) => {
  return (
    <div className="jumbotron">
      <h4>React Currency Converter</h4>
      {localCurrency && <span>Converting from <b>{localFullName}</b></span>}
      {foreignCurrency && <span> to <b>{foreignFullName}</b></span>}
    </div>
  )
}

Banner.propTypes = {
  localCurrency: PropTypes.string.isRequired,
  foreignCurrency: PropTypes.string.isRequired,
  localFullName: PropTypes.string.isRequired,
  foreignFullName: PropTypes.string.isRequired
}

export default Banner
