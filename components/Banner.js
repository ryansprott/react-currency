import React, {PropTypes} from 'react';

const Banner = ({localCurrency, foreignCurrency, localFullName, foreignFullName}) => {
  return (
    <p>
      {localCurrency && <span>Converting from <b>{localFullName}</b></span>}
      {foreignCurrency && <span> to <b>{foreignFullName}</b></span>}
    </p>
  )
}

Banner.propTypes = {
  localCurrency: PropTypes.string,
  foreignCurrency: PropTypes.string,
  localFullName: PropTypes.string,
  foreignFullName: PropTypes.string
}

export default Banner
