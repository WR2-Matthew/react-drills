import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      skydives: ['High Pull', 'Angle', 'Belly', 'Freefly', 'Wingsuit']
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const { userInput, skydives } = this.state
    let filteredSkydives = skydives.filter((e, i) => {
      return e.includes(userInput)
        .map((e, i) => {
          return <p key={i}>{e}</p>
        })
    })
    return (
      <div className="App">
        <input name='userInput' value={userInput} onChange={(e) => this.handleChange(e)} />
        {filteredSkydives}
      </div>
    )
  }
}