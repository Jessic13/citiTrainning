import React, { Component } from 'react'
import './App.css'
import List from './component//List'
import Search from './component/Search'

export default class App extends Component {
  state = {
    users: [],
  }

  saveUsers = (users) => {
    this.setState({ users: users })
    console.log(this.users)
  }
  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />

        <List users={this.users} />
      </div>
    )
  }
}
