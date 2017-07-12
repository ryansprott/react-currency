import React from 'react'

class Foo extends React.Component {
  render () {
    return (
      <select onChange={this.props.onChange}>
        <option value="USD">US dollar</option>
        <option value="MXN">Mexican peso</option>
      </select>
    )
  }
}

export default Foo
