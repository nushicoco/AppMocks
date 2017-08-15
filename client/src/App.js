import React, { Component } from 'react';

import {routes} from './routes'
import Navigator from './components/navigator'
import Brander from './components/brander'

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

  getStyle() {
    let color1 = 'white'
    let color2 = 'black'

    if (this.state.colors){
      color1 = `rgba(${this.state.colors[0]._rgb.join(",")})`
      color2 = `rgba(${this.state.colors[1]._rgb.join(",")})`
    }

    return {
      backgroundColor: color1,
      color:color2
    }
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
      <div className="App" style={this.getStyle()}>
        <div> <h1>Einav's App Mocker</h1></div>
        <div className="container">
          <div className="right-panel inline">
            <div className="navigation inline">
              {/*<Brander updateState={this.updateState.bind(this)}/>*/}
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
