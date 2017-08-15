import React from 'react'

export class Fa extends React.Component {

  render() {
    let {kind, spin = false} = this.props;
    let spun = spin ? 'fa-spin' : '';
    let kir = 'fa '+`${spun} fa-${kind} fa-5x`

    return (
      <i className ={kir}></i>
    )
  }
}
