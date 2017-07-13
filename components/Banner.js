import React, {PropTypes} from 'react';

const Banner = ({localCurrency, foreignCurrency, localFullName, foreignFullName}) => {
  return (
    <p>
      {localCurrency && <span>Converting from {localFullName}</span>}
      {foreignCurrency && <span> to {foreignFullName}</span>}
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
