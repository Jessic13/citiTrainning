import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  handleAddBtn = (event) => {
    this.props.handleAdd({ id: nanoid(), work: this.input.value, done: false })
  }

  handleKeyUp = (event) => {
    let todo = { id: nanoid(), work: this.input.value, done: false }
    if (event.keyCode === 13) {
      this.props.handleAdd(todo)
    }
  }

  render() {
    return (
      <div className="header">
        <div>
          <input
            ref={(c) => (this.input = c)}
            onKeyUp={this.handleKeyUp}
            type="text"
            placeholder="请输入添加项/回车"
          />
          <button onClick={this.handleAddBtn}>添加</button>
        </div>
      </div>
    )
  }
}
