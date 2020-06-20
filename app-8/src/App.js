import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      lukeSkywalker: ''
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/1").then(response => {
      this.setState({
        lukeSkywalker: response.data
      });
    });
  }

  render() {
    const { lukeSkywalker } = this.state
    return (
      <div className="App">
        <h1>Name: {lukeSkywalker.name}</h1>
        <h1>Birth Year: {lukeSkywalker.birth_year}</h1>
        <h1>Height: {lukeSkywalker.height}</h1>
        <h1>Eye Color: {lukeSkywalker.eye_color}</h1>
      </div>
    );
  }
}