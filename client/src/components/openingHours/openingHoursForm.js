/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

import NewOpeningHours from './newOpeningHours'


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

  getPretty(time){
    if (!time.end || time.start === time.end){
      return time.start
    }
      return `${time.start} - ${time.end}`

  }

  renderHour(openingHour){
    return (
      <div>{`${this.getPretty(openingHour.days)} ${this.getPretty(openingHour.hours)}`}</div>
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