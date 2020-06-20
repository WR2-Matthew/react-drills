import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userMessage: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const { userMessage } = this.state
    return (
      <div className="App">
        <label>Your Thoughts Here:</label>
        <input className='inputBox' value={userMessage} name='userMessage' onChange={(e) => this.handleChange(e)} />
        <p>{userMessage}</p>
      </div>
    );
  }
}

