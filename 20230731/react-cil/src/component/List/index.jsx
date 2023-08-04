import React, { Component } from 'react'
import Item from './../Item/index'
import './index.css'

export default class List extends Component {
  render() {
    let todoLists = this.props.todoLists

    return (
      <div className="list">
        {todoLists.map((todoList) => {
          return <Item key={todoList.id} todo={todoList} />
        })}
      </div>
    )
  }
}
