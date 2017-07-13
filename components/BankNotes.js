import React, {PropTypes} from 'react';

const BankNotes = ({banknotes, thisCurrency, otherCurrency, rate}) => {
  return (    
    <table className="table">
      <thead>
        <tr>
          <th>{thisCurrency} Banknote</th>
          <th>{otherCurrency} Equivalent</th>          
        </tr>
      </thead>
      <tbody>
        {banknotes.map((value, index) => {
          return(       
            <tr key={index}>
              <td>{value}</td>
              <td>{(value * rate).toFixed(2)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

BankNotes.propTypes = {
  banknotes: PropTypes.array.isRequired,
  thisCurrency: PropTypes.string.isRequired,
  otherCurrency: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
}

export default BankNotes
