import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item-box">
          <input type="checkbox" id="itemContent"></input>
          <label htmlFor="itemContent">吃饭了吗</label>
        </div>
        <div className="item-del">
          <button>删除</button>
        </div>
      </div>
    );
  }
}
