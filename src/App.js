import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    productos : [
      {name:'Tomate', price:1500, img:'./productos/tomate.jpg'},
      {name:'Arbejas', price:2500, img:'./productos/arbeja.jpg'},
      {name:'Lechuga', price:500, img:'./productos/lechuga.jpg'},

    ]
  }
  render(){
    return(
      <h1>Hola mundo</h1>
    )
  }
}

export default App;
