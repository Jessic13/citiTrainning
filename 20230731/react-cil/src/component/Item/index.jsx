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
  // handleDel = () => {
  //   if (window.confirm('确认删除该项吗')) {
  //     let todo = this.props.todo
  //     this.props.handleDel(todo)
  //   }
  // }

  // 优化：点击删除的回调,只传id项
  handleDel = (id) => {
    if (window.confirm('确认删除该项吗')) {
      this.props.handleDel(id)
    }
  }

  // 鼠标移入移出改变样式的回调
  // handleMouseOver = (e) => {
  //   e.preventDefault()
  //   this.setState({ isMouseOver: true })
  // }

  // handleMouseLeave = (e) => {
  //   e.preventDefault()
  //   this.setState({ isMouseOver: false })
  // }

  // 优化:鼠标移入移出——使用高阶函数：柯里化函数
  handleMouse = (flag) => {
    return () => {
      this.setState({ isMouseOver: flag })
    }
  }

  render() {
    let { id, work, done } = this.props.todo
    let { isMouseOver } = this.state
    return (
      <div
        className="item"
        onMouseOver={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: isMouseOver ? 'lightgrey' : '' }}
      >
        <div className="item-box">
          <input
            type="checkbox"
            id={id}
            checked={done ? true : false}
            onChange={this.handleCheck}
          ></input>
          <label htmlFor={id}>{work}</label>
        </div>
        <div
          className="item-del"
          style={{ display: isMouseOver ? 'block' : 'none' }}
        >
          <button onClick={() => this.handleDel(id)}>删除</button>
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
