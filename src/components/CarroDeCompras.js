import { Component } from 'react';
import './Components.css'

class CarroDeCompras extends Component{
  getNumber(n) {
    if (!n) { return ' '}
    return n > 9 ? '9+' : n
  }

  render(){
    console.log(this.props)
    const {value} = this.props
    return(
      <div>
        <span className='carro-de-compras-bubble'> {this.getNumber(value)} </span>
        <button className='carro-de-compras'>Carro de compras</button>
      </div>
    )
  }
}

export default CarroDeCompras;
