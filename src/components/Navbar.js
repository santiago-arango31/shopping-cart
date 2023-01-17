import { Component } from 'react';
import CarroDeCompras from './CarroDeCompras.js';
import './Components.css'

class Navbar extends Component {
  render() {
    const { carro, mostrarDetalleCarro, mostrarCarro } = this.props
    return (
      <nav className='navbar'>
        <h1 className='title'>Shop</h1>
        <CarroDeCompras carro= {carro} mostrarDetalleCarro={mostrarDetalleCarro} mostrarCarro={mostrarCarro} />
      </nav>
    )
  }
}

export default Navbar;
