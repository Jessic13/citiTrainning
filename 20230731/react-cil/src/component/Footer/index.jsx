import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-box">
          <input type="checkbox" />
          <label htmlFor="">已完成0/全部2</label>
        </div>
        <div className="footer-btn">
          <button>清除已完成任务</button>
        </div>
      </div>
    );
  }
}
