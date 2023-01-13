import { Component } from 'react';
import CarroDeCompras from './CarroDeCompras.js';
import './Components.css'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <h1 className='title'>Shop</h1>
        <CarroDeCompras/>
      </nav>
    )
  }
}

export default Navbar;
