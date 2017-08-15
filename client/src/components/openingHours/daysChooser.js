/**
 * Created by einavcarmon on 15/08/2017.
 */
import React from 'react'

import './openingHours.css'
import {DaysInWeek} from '../../consts'


export default class DaysChooser extends React.Component {
  constructor (props) {
    super(props)
    this.days = new Set()
  }
  showCheckboxes() {
    let checkboxes = document.getElementById("checkboxes");
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
  }

  updateDays(e) {
    let index = +e.target.attributes["data-index"].value
    // this.days[index] = !this.days[index]
    if (this.days.has(index)){
      this.days.delete(index)
    }else{
      this.days.add(index)
    }
    this.props.updateDays(this.days)
  }

  render() {
    return (
      <div className="multiselect">
        <div className="selectBox" onClick={() => this.showCheckboxes()}>
          <select>
            <option>Select days</option>
          </select>
          <div className="overSelect"></div>
        </div>
        <div id="checkboxes">
          { DaysInWeek.map((day,index) => {
            return (<label htmlFor={day} key={day} className="days-label">
              <input type="checkbox" id={day} data-index={index} onChange={(e) => this.updateDays(e)}/>
              {day}
            </label>)})}
        </div>
      </div>
    )
  }
}

// export default DaysChooser