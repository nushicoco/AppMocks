/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

import './aboutUs.css'

export default class AboutUsView extends Component {

  constructor (props ){
    super(props)
  }

  render() {
    return (
      <div className="in-phone-view">
        <h1>{this.props.companyName}</h1>
        <h3>{this.props.companyDescription}</h3>
        <div className="website-url"><a  href={this.props.companyURL}>{this.props.companyURL}</a></div>
      </div>
    )
  }
}
