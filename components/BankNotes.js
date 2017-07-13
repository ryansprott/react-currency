import React, {PropTypes} from 'react';

const BankNotes = ({banknotes, selected, rate}) => {
  return (    
    <table>
      <thead>
        <tr>
          <th>Banknote</th>
          <th>Equivalent</th>          
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
  selected: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
}

export default BankNotes
