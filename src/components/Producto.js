import { Component } from "react";
import {Button} from './Button'
import './Producto.css'


class Producto extends Component {
    render(){
        // console.log('productos', this.props)
        const { producto, agregarAlCarro } = this.props
        return(
           <div className="item-producto">
            <img className="item-image" alt={producto.name} src={producto.img}></img>
            <h3>{producto.name}</h3>
            <p>{producto.price}</p>
            {/* <Button onClick={()=> agregarAlCarro(agregarAlCarro)}>
                Agregar al carro
            </Button> */}
           </div>
        )
    }
}

export default Producto