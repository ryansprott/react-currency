import React, {PropTypes} from 'react';

const BankNotes = ({banknotes, selected}) => {
  return (    
    <table>
      {banknotes.map(v => {
        return(       
          <tr>
            <td>{v + ' ' + selected}</td>
            <td></td>
          </tr>
        )
      })}
    </table>
  )
}

BankNotes.propTypes = {
  banknotes: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired
}

export default BankNotes
