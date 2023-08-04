import React, { Component } from 'react'
import Item from './../Item/index'
import './index.css'

export default class List extends Component {
  // 为item组件搭桥梁 与app组件通信
  // 修改done值
  handleChecked = (newTodo) => {
    this.props.handleChecked(newTodo)
  }

  // 删除item
  handleDel = (newTodo) => {
    this.props.handleDel(newTodo)
  }

  render() {
    let todoLists = this.props.todoLists

    return (
      <div className="list">
        {todoLists.map((todoList) => {
          return (
            <Item
              key={todoList.id}
              todo={todoList}
              handleChecked={this.handleChecked}
              handleDel={this.handleDel}
            />
          )
        })}
      </div>
    )
  }
}
