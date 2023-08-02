import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <input type="text" placeholder="请输入添加项/回车" />{' '}
          <button>添加</button>
        </div>
      </div>
    );
  }
}
