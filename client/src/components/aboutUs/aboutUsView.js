/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

import './aboutUs.css'

export default class AboutUsView extends Component {

  render() {
    return (
      <div className="in-phone-view">
        <h1>{this.props.companyName}</h1>
        <h4>{this.props.companyDescription}</h4>
        {this.props.companyURL &&
          <div className="website-url">Join us on: <a href={this.props.companyURL}
                                                    target="_blank">{this.props.companyURL}</a></div>
        }
      </div>
    )
  }
}
