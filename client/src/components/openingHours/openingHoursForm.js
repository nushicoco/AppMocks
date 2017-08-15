/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

import NewOpeningHours from './newOpeningHours'
import {DaysInWeek} from '../../consts'


import './openingHours.css'
import '../../common.css'

export default class OpeningHoursForm extends Component {
  constructor (props ){
    super(props)

    this.state = {
      openingHours: props.openingHours || []
    }
  }

  componentWillMount(){
    this.setState({openingHours:this.props.openingHours || []})
  }

  componentWillReceiveProps(nextProps){
    this.setState({openingHours:nextProps.openingHours || []})
  }

  handleAdd(newOpeningHours){
    let arr = this.state.openingHours.slice()
    arr.push(newOpeningHours)
    this.props.updateState("openingHours", arr)
  }

  getPrettyDays(daysSet){
    let ret = []
    for (let day of daysSet){
      ret.push(DaysInWeek[day])
    }
    return ret.join(",")
  }

  renderHour(openingHour){
    return (
      <div>{this.getPrettyDays(openingHour.days)} {openingHour.start} - {openingHour.end}</div>
    )
  }

  render() {
    return (
      <div className="form-container">
        <NewOpeningHours handleAdd={this.handleAdd.bind(this)}/>
        {this.state.openingHours.length > 0 && this.state.openingHours.map(openingHour => this.renderHour(openingHour))}
      </div>
    )
  }
}