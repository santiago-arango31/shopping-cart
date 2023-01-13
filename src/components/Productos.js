import { Component } from "react";
import Producto from './Producto'
import './Components.css'

class Productos extends Component {
    componentDidMount() {
        // console.log('productos', this.props)
    }

    render() {
        const { productos, agregarAlCarro } = this.props
        return (
            <div className="list-productos">
                {productos.map((value, index, array) =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={value.name}
                        producto={value}
                    ></Producto>
                )}
            </div>
        )
    }
}

export default Productos