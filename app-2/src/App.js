import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      skydives: ['High Pull', 'Angle', 'Belly', 'Freefly', 'Wingsuit']
    }
  }


  render() {
    const { skydives } = this.state
    const mappedSkydives = skydives.map((e, i) => {
      return <p key={i}>{e}</p>
    })

    return (
      <div className="App">
        {mappedSkydives}
      </div>
    );
  }
}


