import React, { Component } from 'react'

import './navigator.css'

export default class Navigator extends Component {
  render() {
    return ( <div>
      { this.props.tabs.map((tab) => <button key={tab.name} onClick={() => this.props.clickHandle(tab)}>{tab.name}</button>)}
      </div>
    )
  }
}