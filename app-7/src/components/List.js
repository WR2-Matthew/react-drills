import React, { Component } from 'react';
import Todo from "./Todo";

export default class List extends Component {
  render() {
    const { list } = this.props
    let mappedList = list.map((element, index) => {
      return <Todo key={index} toDo={element} />;
    });

    return <div>{mappedList}</div>;
  }
}