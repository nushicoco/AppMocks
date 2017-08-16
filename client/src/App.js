import React, { Component } from 'react';

import {routes} from './routes'
import Navigator from './components/navigator'

import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      tabs:routes,
      currentTab:routes[0]
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
      backgroundImage:`url('${process.env.PUBLIC_URL}/img/phone.png')`,
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
      <div className="App">
        <div className="app-header">Einav's App Mocker</div>
        <div className="divider"></div>
        <div className="app-container">
          <div className="right-panel">
            <div className="navigation">
              <Navigator tabs={this.state.tabs}
                         currentTab={this.state.currentTab.name}
                         clickHandle={this.updateState.bind(this,"currentTab")} ></Navigator>
            </div>
            <div className="main-pane">{this.renderComponent(this.state.currentTab.mainComponent)(this.state)}</div>
            </div>
          <div className="viewer-pane" style={this.getStyle()}>
            <div className="phone-viewer" >
              <div className="in-phone" >
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
