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

  renderComponent(component) {
    return (props) => {
      return React.createElement(component, {
        ...props
      })
    }
  }

  render() {
    let changeTab  = (tab) => {
      console.log(tab.name)
      this.setState({currentTab:tab})
    }

    return (
      <div className="App">
        <div> <h1>Some Header</h1></div>
        <div className="container">
          <div className="right-panel inline">
            <div className="navigation inline">
              <Navigator tabs={this.state.tabs} clickHandle={changeTab} ></Navigator>
            </div>
            <div className="main-pane inline">{this.renderComponent(this.state.currentTab.mainComponent)()}</div>
            </div>
          <div className="viewer-pane inline">
            <div className="phone-viewer">
              <img src={process.env.PUBLIC_URL + '/img/phone.jpg'} className="phone-image"/>
              <div className="in-phone">
                {this.renderComponent(this.state.currentTab.viewComponent)()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
