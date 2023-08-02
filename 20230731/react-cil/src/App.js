import React, { Component } from 'react';
import './App.css';
import Footer from './component/Footer/index';
import Header from './component/Header';
import List from './component/List/index';

// 创建“外壳”组件 App
// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div className="background box center-in-center">
        <Header></Header>
        <List></List>
        <Footer></Footer>
      </div>
    );
  }
}
