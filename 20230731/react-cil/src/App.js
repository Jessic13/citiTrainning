import React, { Component } from 'react'
import './App.css'
import Footer from './component/Footer/index'
import Header from './component/Header'
import List from './component/List/index'

// 创建“外壳”组件 App
// 创建并暴露App组件
export default class App extends Component {
  state = {
    todoLists: [
      { id: 1, work: '吃饭', done: true },
      { id: 2, work: '学习', done: true },
      { id: 3, work: '睡觉', done: false },
    ],
    isCheckedAll: false,
  }

  // 添加项
  handleAdd = (todo) => {
    let newList = [todo, ...this.state.todoLists]
    this.setState({ todoLists: newList })
  }

  // 修改勾选项
  handleChecked = (newTodo) => {
    let { todoLists } = this.state
    let newList = todoLists.filter((todo) => {
      if (todo.id === newTodo.id) {
        todo.done = newTodo.done
      }
      return todo
    })
    this.setState({ todoList: newList })
  }

  // 删除item
  // handleDel = (newTodo) => {
  //   let todoList = this.state.todoLists
  //   let newList = todoList.filter((todo) => {
  //     return todo.id !== newTodo.id
  //   })
  //   this.setState({ todoLists: newList })
  // }

  // 优化：只传id 不传完整对象
  handleDel = (id) => {
    let todoList = this.state.todoLists
    let newList = todoList.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todoLists: newList })
  }

  // 勾选、取消全部
  // filter 函数可以用map
  handleCheckAll = (isChecked) => {
    let todoLists = this.state.todoLists
    let newList = todoLists.filter((todo) => {
      todo.done = isChecked
      return todo
    })
    this.setState({ todoLists: newList })
  }

  // 删除已完成
  handleDelDone = (donelist) => {
    let todoLists = this.state.todoLists
    let newList = todoLists.filter((todo) => {
      return todo.done === false
    })
    this.setState({ todoLists: newList })
  }

  render() {
    return (
      <div className="background box center-in-center">
        <Header handleAdd={this.handleAdd} />
        <List
          todoLists={this.state.todoLists}
          handleChecked={this.handleChecked}
          handleDel={this.handleDel}
        />
        <Footer
          todoLists={this.state.todoLists}
          handleCheckAll={this.handleCheckAll}
          handleDelDone={this.handleDelDone}
        />
      </div>
    )
  }
}
