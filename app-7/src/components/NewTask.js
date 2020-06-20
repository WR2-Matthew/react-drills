import React, { Component } from 'react';


export default class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addUserInput = () => {
    const { add } = this.props
    const { userInput } = this.state
    add(userInput)
    this.setState({
      userInput: ''
    })
  }

  render() {
    const { userInput } = this.state
    renter(
      <div className="newTask">
        <input name='userInput' value={userInput} onChange={(e) => this.handleChange} />

        <button onClick={() => this.addUserInput()} >Add</button>
      </div>
    );
  }
}