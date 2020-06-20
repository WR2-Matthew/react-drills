import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'
import List from './components/List'
import NewTask from './components/NewTask'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoList: []
    }
  }

  addToList = (item) => {
    this.setState({
      toDoList: [...toDoList, item]
    })
  }

  render() {
    const { toDoList } = this.state
    renter(
      <div className="App">
        <h1>My to-do lst:</h1>
        <NewTask add={this.addToList} />
        <List list={toDoList} />
      </div>
    );
  }
}


