/**
 * Created by einavcarmon on 15/08/2017.
 */
import React from 'react'

import './openingHours.css'

const Hours = Array.from(new Array(24),(val,index)=>index);


export default class HoursChooser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hours:{},
      startSelectedIndex: 0
    }
  }

  updateStartHour(e) {
    let hours = { start: e.target.value}
    this.setState({
      startSelectedIndex:e.target.selectedIndex,
      hours})
    this.props.updateHours(hours)
  }

  updateEndHour(e) {
    let hours = {
        start:this.state.hours.start,
        end: e.target.value
    }
    this.setState({hours})
    this.props.updateHours(hours)
  }

  render() {
    return (
      <div className="multiselect">
        <div className="selectBox">
          From
          <select onChange={(e) => this.updateStartHour(e)}>
            <option>Select an Hour</option>
          { Hours.map((hour,index) => <option data-index={index} key={index}>{`${hour}:00`}</option>)}
          </select>
          { this.state.hours.start &&
          <span> TO
            <select onChange={(e) => this.updateEndHour(e)}>
          { Hours.slice(this.state.startSelectedIndex - 1).map((hour,index) => <option data-index={index} key={index}>{`${hour}:00`}</option>)}
          </select>
          </span>
          }
        </div>
      </div>
    )
  }
}