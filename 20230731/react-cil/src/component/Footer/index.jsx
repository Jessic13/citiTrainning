import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  state = { isCheckedAll: this.props.isCheckedAll }
  // 计算已完成的item
  countFinish = () => {
    let todoLists = this.props.todoLists
    let sum = todoLists.reduce((prev, cur) => {
      return prev + (cur.done ? 1 : 0)
    }, 0)
    return sum
  }

  // 勾选 取消 全部
  handleCheckAll = (e) => {
    this.props.handleCheckAll(e.target.checked)
  }

  // 清除已完成任务
  handleDelDone = (e) => {
    let { todoLists } = this.props
    let isHaveDone = todoLists.some((todo) => {
      return todo.done === true
    })
    if (isHaveDone) {
      if (window.confirm('确定清除已完成任务吗')) {
        this.props.handleDelDone()
      }
    }
  }

  render() {
    let { todoLists, isCheckedAll } = this.props
    return (
      <div className="footer">
        <div className="footer-box">
          <input
            id="checkedAll"
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={isCheckedAll}
          />
          <label htmlFor="checkedAll">
            已完成{this.countFinish()} / 全部{todoLists.length}
          </label>
        </div>
        <div className="footer-btn">
          <button onClick={this.handleDelDone}>清除已完成任务</button>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  todoLists: PropTypes.array.isRequired,
  isCheckedAll: PropTypes.bool.isRequired,
  handleCheckAll: PropTypes.func.isRequired,
  handleDelDone: PropTypes.func.isRequired,
}
