import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const { toDo } = this.props
    return <p>{toDo}</p>;
  }
}