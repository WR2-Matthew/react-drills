import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

export default class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <div className="App" >
        <Image src={"https://http.cat/409"} />
      </div>
    );
  }
}

