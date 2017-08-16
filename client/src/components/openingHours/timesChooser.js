/**
 * Created by einavcarmon on 15/08/2017.
 */
import React from 'react'
import { FormControl } from 'react-bootstrap'

import './openingHours.css'

export default class TimesChooser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      times:{},
      startSelectedIndex: 0
    }
  }
  updateStartTime(e) {
    let times = { start: e.target.value }
    this.setState({
      startSelectedIndex:e.target.selectedIndex,
      times
    })
    this.props.updateTimes(times)
  }

  updateEndTime(e) {
    let times = {
        start:this.state.times.start,
        end: e.target.value
    }
    this.setState({times})
    this.props.updateTimes(times)
  }

  render() {
    return (
        <div>
          <label>{this.props.label}: </label>
          <FormControl onChange={(e) => this.updateStartTime(e)}
                       componentClass="select"
                       placeholder="Select"
                       className="time-select">
            <option>Select</option>
          { this.props.times.map((time,index) => <option data-index={index} key={index}>{time}</option>)}
          </FormControl>
          { this.state.times.start &&
          <span> <label> To </label>
            <FormControl componentClass="select"
                         placeholder="Select"
                         className="time-select"
                         onChange={(e) => this.updateEndTime(e)}>
            { this.props.times.slice(this.state.startSelectedIndex - 1).map((time,index) => <option data-index={index} key={index}>{time}</option>)}
            </FormControl></span>
          }
        </div>
    )
  }
}