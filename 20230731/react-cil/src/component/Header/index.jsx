import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  handleAddBtn = (e) => {
    if (this.input.value) {
      this.props.handleAdd({
        id: nanoid(),
        work: this.input.value,
        done: false,
      })
      this.input.value = ''
    }
  }

  // 优化：此处并不需要给input绑定ref，onKeyUp事件可以获取到e.target.value 即input值
  handleKeyUp = (e) => {
    if (e.target.value) {
      let todo = { id: nanoid(), work: e.target.value, done: false }
      if (e.keyCode === 13) {
        this.props.handleAdd(todo)
        e.target.value = ''
      }
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

Header.propTypes = {
  handleAdd: PropTypes.func.isRequired,
}
