import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="container">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." />
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">
              Go!
            </button>
          </span>
        </div>
      </div>
    )
  }
}
