import React, { Component } from 'react'

export default class Operan extends Component {
  render() {
    const {makanan, gantiMakanan} = this.props
    return (
      <div>
        <p>Operan state berupa props : {makanan}</p>
        <button onClick={gantiMakanan}>ganti makanan pakai props</button>
      </div>
    )
  }
}
