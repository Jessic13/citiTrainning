import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className="row">
        <div className="card">
          <div style={{ margin: '20px' }}>
            <a
              href="https://github,com/reactjs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://tse2-mm.cn.bing.net/th/id/OIP-C.krAH9u9beNT0YWmw8sNteQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                style={{ width: '100px' }}
                alt=""
              />
            </a>
            <p>xxxxxxx</p>
          </div>
        </div>
      </div>
    )
  }
}
