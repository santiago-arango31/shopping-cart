import { Component } from "react";
import './Components.css'


class Button extends Component {
    render() {
        // console.log(this.props)
        return (
            <button className="item-button" {...this.props}/>
        )
    }
}

export default Button