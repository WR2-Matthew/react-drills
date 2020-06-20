import React, { Component } from 'react'

export default class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    const { src } = this.props
    return (
      <div>
        <img src={src} />
        <h1>409</h1>
        <h4>Conflict</h4>
      </div>
    )
  }
}