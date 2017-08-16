/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

import HoursDisplay from './hoursDisplay'

import './openingHours.css'

export default class OpeningHoursView extends Component {

  render() {
    return (
      <div className="in-phone-view">
        <h1>{this.props.companyName}</h1>
        <HoursDisplay showOnMobile={ true } hours={this.props.openingHours} viewOnly={true}/>
      </div>
    )
  }
}
