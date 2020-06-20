import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

export default class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}