import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { isMouseOver: false }

  // 取消、勾选的回调
  handleCheck = (e) => {
    let todo = this.props.todo
    todo.done = e.target.checked
    this.props.handleChecked(todo)
  }

  // 点击删除的回调
  handleDel = () => {
    if (window.confirm('确认删除该项吗')) {
      let todo = this.props.todo
      this.props.handleDel(todo)
    }
  }

  // 鼠标移入移出改变样式的回调
  handleMouseOver = (e) => {
    e.preventDefault()
    this.setState({ isMouseOver: true })
  }

  handleMouseLeave = (e) => {
    e.preventDefault()
    this.setState({ isMouseOver: false })
  }

  render() {
    let todo = this.props.todo
    let { isMouseOver } = this.state
    return (
      <div
        className="item"
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        style={{ backgroundColor: isMouseOver ? 'lightgrey' : '' }}
      >
        <div className="item-box">
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.done ? true : false}
            onChange={this.handleCheck}
          ></input>
          <label htmlFor={todo.id}>{todo.work}</label>
        </div>
        <div
          className="item-del"
          style={{ display: isMouseOver ? 'block' : 'none' }}
        >
          <button onClick={this.handleDel}>删除</button>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  todo: PropTypes.object.isRequired,
  handleChecked: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired,
}
