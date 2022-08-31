import React, { Component } from 'react'
import Operan from './Operan';

export default class Stateprops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan : "bakso"
    }
  }

  gantiMakanan = () => {
      if(this.state.makanan === "bakso")
      {
        this.setState({makanan : "soto"})
      } else {
        this.setState({makanan : "bakso"})
      }
  }

  render() {
    return (
      <div>
        <p>{this.state.makanan}</p>
        <button onClick={this.gantiMakanan}>Ganti Makanan</button>
        
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
      </div>
    )
  }
}
