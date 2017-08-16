/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

import NewOpeningHours from './newOpeningHours'
import HoursDisplay from './hoursDisplay'

import './openingHours.css'

export default class OpeningHoursForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openingHours: props.openingHours || []
    }
  }

  componentWillMount () {
    this.setState({openingHours: this.props.openingHours || []})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({openingHours: nextProps.openingHours || []})
  }

  handleAdd (newOpeningHours) {
    let arr = this.state.openingHours.slice()
    arr.push(newOpeningHours)
    this.props.updateState('openingHours', arr)
  }

  handleDelete (index) {
    let arr = this.state.openingHours.slice()
    arr.splice(index, 1)
    this.props.updateState('openingHours', arr)
  }

  render () {
    return (
      <div className='form-container'>
        <NewOpeningHours handleAdd={this.handleAdd.bind(this)} />
        <HoursDisplay showOnMobile={false} hours={this.state.openingHours} deleteHour={this.handleDelete.bind(this)} />
      </div>
    )
  }
}
