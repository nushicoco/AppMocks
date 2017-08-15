/**
 * Created by einavcarmon on 15/08/2017.
 */
import React from 'react'
import { Button } from 'react-bootstrap'

import DaysChooser from './daysChooser'
import HoursChooser from './hoursChooser'

import './openingHours.css'

export default class NewOpeningHours extends React.Component {

  constructor () {
    super()
    this.state = {
      days: {},
      hours: {}
    }
  }

  getDays(days){
    this.setState({days})
  }
  getHours(hours){
    this.setState({hours})
  }

  addClicked() {
    let newOpeningHours = {
      days: this.state.days,
      hours: this.state.hours
    }

    this.props.handleAdd(newOpeningHours)
  }

  render () {
    return (
      <div className="new-hour">
        <DaysChooser updateDays={this.getDays.bind(this)}/>
        <HoursChooser updateHours={this.getHours.bind(this)}/>
        <div className="button-container">
          <Button className="btn-add"
                  onClick={() => this.addClicked()}
                  disabled={!this.state.days.start || !this.state.hours.start}>
            Add
          </Button>
        </div>
      </div>
    )
  }

}