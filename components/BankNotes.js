import React, {PropTypes} from 'react';

const BankNotes = ({banknotes, selected}) => {
  return (    
    <table>
      <tbody>
      {banknotes.map((v, i) => {
        return(       
          <tr key={i}>
            <td>{v + ' ' + selected}</td>
            <td></td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

BankNotes.propTypes = {
  banknotes: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired
}

export default BankNotes
