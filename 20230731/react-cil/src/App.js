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
  }

  // 添加项
  handleAdd = (todo) => {
    let newList = [todo, ...this.state.todoLists]
    this.setState({ todoLists: newList })
  }

  render() {
    return (
      <div className="background box center-in-center">
        <Header handleAdd={this.handleAdd} />
        <List todoLists={this.state.todoLists} />
        <Footer />
      </div>
    )
  }
}
