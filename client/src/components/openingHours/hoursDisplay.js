/**
 * Created by einavcarmon on 16/08/2017.
 */
import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'

export default class HoursDisplay extends Component {
  constructor (props) {
    super()

    this.state = {
      openingHours: props.hours || []
    }
  }

  getPretty (time) {
    return  (!time.end || time.start === time.end) ? time.start : `${time.start} - ${time.end}`
  }

  renderHour (openingHour, index) {
    return (
      <tr key={index}>
        {!this.props.viewOnly && <td><Button onClick={() => this.props.deleteHour(index)}>Delete</Button></td> }
        <td>{this.getPretty(openingHour.days)}</td>
        <td>{this.getPretty(openingHour.hours)}</td>
      </tr>
    )
  }

  componentWillReceiveProps (nextProps) {
    this.setState({openingHours: nextProps.hours || []})
  }

  renderEmptyView () {
    return <div className='empty-view'>{!this.props.viewOnly && `Add Hours to see the opening hours display`}</div>
  }

  renderHoursTable () {
    return (
      <div className='hours-display'>
        <Table>
          <thead>
            <tr>
              {!this.props.viewOnly && <th />}
              <th>Days</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {this.state.openingHours.map((hour, index) => this.renderHour(hour, index))}
          </tbody>
        </Table>
      </div>
    )
  }

  render () {
    return (
      <div className={!this.props.showOnMobile ? 'mobile-hide' : ''}>
        <h4>Opening Hours</h4>
        {this.state.openingHours.length === 0
        ? this.renderEmptyView()
        : this.renderHoursTable()}
      </div>
    )
  }
}
