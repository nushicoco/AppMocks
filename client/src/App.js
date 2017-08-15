import React, { Component } from 'react';

import {routes} from './routes'
import Navigator from './components/navigator'

import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      tabs:routes,
      currentTab:routes[0],
      // DEBUG todo remove this
      apiToken:"6162723-c19e8770101d3873c953539fa",
      companyName:"Como"
    }
  }

  updateState(key,value){
    let newSubState = {}

    newSubState[key] = value

    this.setState(newSubState)
  }

  renderComponent(component) {
    return (props) => {
      props.updateState = this.updateState.bind(this)
      return React.createElement(component, {
        ...props
      })
    }
  }

  render() {

    return (
      <div className="App">
        <div> <h1>Some Header</h1></div>
        <div className="container">
          <div className="right-panel inline">
            <div className="navigation inline">
              <Navigator tabs={this.state.tabs} clickHandle={this.updateState.bind(this,"currentTab")} ></Navigator>
            </div>
            <div className="main-pane inline">{this.renderComponent(this.state.currentTab.mainComponent)(this.state)}</div>
            </div>
          <div className="viewer-pane inline">
            <div className="phone-viewer">
              <img src={process.env.PUBLIC_URL + '/img/phone.png'} className="phone-image" alt="phone"/>
              <div className="in-phone">
                {this.renderComponent(this.state.currentTab.viewComponent)(this.state)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
