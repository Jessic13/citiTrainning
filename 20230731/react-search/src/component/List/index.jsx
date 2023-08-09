import React, { Component } from 'react'
import Item from './../Item'

export default class List extends Component {
  render() {
    const { users } = this.props
    return (
      <div className="container" style={{ margin: '20px' }}>
        <Item></Item>
      </div>
    )
  }
}
