import React, { Component } from 'react'

import { Button, ButtonGroup } from 'react-bootstrap'

import './navigator.css'

export default class Navigator extends Component {
  render() {
    return ( <ButtonGroup>
      { this.props.tabs.map((tab) =>
        ( <Button className={`nav-btn ${this.props.currentTab === tab.name ? 'tab-active' : 'tab-not-active'}`}
                 key={tab.name}
                 onClick={() => this.props.clickHandle(tab)}>
            {tab.name}
          </Button>)
      )}
    </ButtonGroup>
    )
  }
}