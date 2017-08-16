/**
 * Created by einavcarmon on 16/08/2017.
 */
import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'

export default class HoursDisplay extends Component {

  constructor (props) {
    super()

    this.state = {
      openingHours : props.hours || []
    }
  }

  getPretty(time){
    if (!time.end || time.start === time.end){
      return time.start
    }
    return `${time.start} - ${time.end}`

  }

  renderHour(openingHour,index){
    return (
      <tr key={index}>
        {!this.props.viewOnly && <td><Button onClick={() => this.props.deleteHour(index)}>Delete</Button></td> }
        <td>{this.getPretty(openingHour.days)}</td>
        <td>{this.getPretty(openingHour.hours)}</td>
      </tr>
    )
  }

  componentWillReceiveProps(nextProps){
    this.setState({openingHours:nextProps.hours || []})
  }

  renderEmptyView(){
    return <div className="empty-view">{!this.props.viewOnly && `Add Hours to see the opening hours display`}</div>
  }

  renderHoursTable(){
    return (

        <Table>
          <thead>
            <tr>
              {!this.props.viewOnly && <th></th>}
              <th>Days</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
          {this.state.openingHours.map((hour,index) => this.renderHour(hour, index))}
          </tbody>
        </Table>
    )
  }

  render () {
    return (
      <div>
        <h4>Opening Hours</h4>
        {this.state.openingHours.length === 0
        ? this.renderEmptyView()
        : this.renderHoursTable()}
      </div>
    )
  }
}