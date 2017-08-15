/**
 * Created by einavcarmon on 15/08/2017.
 */
import React from 'react'
import { FormControl } from 'react-bootstrap'

import './openingHours.css'
import { DaysInWeek } from '../../consts'


export default class DaysChooser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      days:{},
      startSelectedIndex: 0
    }
  }
  updateStartDay(e) {
    let days = { start: e.target.value }
    this.setState({
      startSelectedIndex:e.target.selectedIndex,
      days
    })
    this.props.updateDays(days)
  }

  updateEndDay(e) {
    let days = {
        start:this.state.days.start,
        end: e.target.value
    }
    this.setState({days})
    this.props.updateDays(days)
  }

  render() {
    return (
        <div>
          <label>From: </label>
          <FormControl onChange={(e) => this.updateStartDay(e)}
                       componentClass="select"
                       placeholder="Select a Day"
                       className="time-select">
            <option>Select a Day</option>
          { DaysInWeek.map((day,index) => <option data-index={index} key={index}>{day}</option>)}
          </FormControl>
          { this.state.days.start &&
          <span> <label> To </label>
            <FormControl componentClass="select"
                         placeholder="Select a Day"
                         className="time-select"
                         onChange={(e) => this.updateEndDay(e)}>
          { DaysInWeek.slice(this.state.startSelectedIndex - 1).map((day,index) => <option data-index={index} key={index}>{day}</option>)}
            </FormControl></span>
          }
        </div>
    )
  }
}