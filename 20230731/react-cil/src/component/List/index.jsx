import { PropTypes } from 'prop-types'
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
        {todoLists.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              handleChecked={this.handleChecked}
              handleDel={this.handleDel}
            />
          )
        })}
      </div>
    )
  }
}

List.propTypes = {
  todoLists: PropTypes.array.isRequired,
  handleChecked: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired,
}
