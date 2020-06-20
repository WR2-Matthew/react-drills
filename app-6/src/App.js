import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoList: [],
      userInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTask = () => {
    const { toDoList, userInput } = this.state
    this.setState({
      toDoList: [...toDoList, userInput],
      userInput: ''
    })
  }

  render() {
    const { toDoList } = this.state
    const listToDisplay = toDoList.map((e, i) => {
      return <Todo key={i} task={e} />;
    });
    return (
      <div className="App">
        <h1>My To Do List:</h1>

        <label>Enter Tasks:</label>
        <input name='userInput' value={userInput} onChange={(e) => this.handleChange(e)} placeholder='Your Tasks Here' />

        <button onClick={() => this.addTask()} >Add</button>

        {listToDisplay}
      </div>
    );
  }
}


