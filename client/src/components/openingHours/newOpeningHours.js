/**
 * Created by einavcarmon on 15/08/2017.
 */
import React from 'react'
import DaysChooser from './daysChooser'

import './openingHours.css'

export default class NewOpeningHours extends React.Component {
  getDays(daysArray){
    this.days = daysArray
  }

  addClicked() {
    let newOpeningHours = {
      days:this.days,
      start: this.start,
      end: this.end
    }

    this.props.handleAdd(newOpeningHours)
  }

  hourChanged (e,type){
    this[type] = e.target.value
  }

  render () {
    return (
      <div>
        <DaysChooser updateDays={this.getDays.bind(this)}/>
        <div className="field-label">
          From <input onChange={(e) => this.hourChanged(e,"start")}/> To <input onChange={(e) => this.hourChanged(e,"end")}/>
        </div>
        <button onClick={() => this.addClicked()}>Add</button>
      </div>
    )
  }

}