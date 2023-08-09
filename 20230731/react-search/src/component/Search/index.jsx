import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
  // 获取输入并发送请求
  search = () => {
    const {
      keyWordElement: { value: keyWord },
    } = this
    if (keyWord === '') {
      alert('请输入内容')
    }
    let URL = `https://api.github.com/search/users?q=${keyWord}`
    axios
      .get(URL)
      .then((value) => {
        this.props.saveUsers(value.data.items)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <input
          type="text"
          placeholder="请输入关键字"
          ref={(c) => (this.keyWordElement = c)}
        />
        &nbsp;
        <button onClick={this.search}>搜索</button>
      </div>
    )
  }
}
