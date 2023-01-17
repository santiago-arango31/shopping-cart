import { Component } from 'react';
import './Components.css'


const styles = {
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    display: 'flex',
    justifyContent: 'space-between',
    alingItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaa'
  }
}
class CarroDeCompras extends Component {
  getNumber(n) {
    if (!n) { return ' ' }
    return n > 9 ? '9+' : n
  }

  render() {
    const { carro, mostrarDetalleCarro, mostrarCarro } = this.props
    const cantidad = carro.length ? carro.reduce((acc, el) => acc + el.cantidad, 0) : 0;
    return (
      <div>
        {
          cantidad !== 0 ?
            <span className='carro-de-compras-bubble'> {this.getNumber(cantidad)} </span>
            : null
        }
        <button className='carro-de-compras' onClick={mostrarCarro}>Carro de compras</button>
        {mostrarDetalleCarro ?
          <div className='carro-de-compras-detalle'>
            <ul style={styles.ul}>
              {carro.map(
                x =>
                  <li key={x.name} style={styles.producto}>
                    <img src={x.img} width='50' height='32' />
                    {x.name} <span>{x.cantidad}</span>
                  </li>
              )}
            </ul>
          </div> : null}
      </div>
    )
  }
}

export default CarroDeCompras;
