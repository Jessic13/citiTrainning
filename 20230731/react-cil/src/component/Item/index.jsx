import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  handleCheck = (e) => {
    console.log(e.target.checked)
  }

  render() {
    let todo = this.props.todo
    return (
      <div className="item">
        <div className="item-box">
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.done ? true : false}
            onChange={this.handleCheck}
          ></input>
          <label htmlFor={todo.id}>{todo.work}</label>
        </div>
        <div className="item-del">
          <button>删除</button>
        </div>
      </div>
    )
  }
}
