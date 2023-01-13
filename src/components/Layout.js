import { Component } from 'react';
import './Components.css'

class Layout extends Component{
  render(){
    return(
      <div className='layout'>
        <div className='layout-containers'>
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
