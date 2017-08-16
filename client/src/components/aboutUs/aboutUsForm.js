/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

import { FormControl } from 'react-bootstrap'

import './aboutUs.css'

export default class AboutUsForm extends Component {
  constructor (props ){
    super(props)

    this.fields = [
      {
        name: "companyName",
        label: "Business Name",
        className: "input-name",
        type: "input"
      },
      {
        name:"companyDescription",
        label:"Description",
        className:"input-description",
        type: "textarea"
      },
      {
        name: "companyURL",
        label:"Website",
        className:"input-website",
        type: "input"
      }]

    this.state = {}
  }

  componentWillMount(){
    this.fields.forEach(field => {
      this.setState({[field.name]:this.props[field.name]})
    })
  }

  renderInput(field) {

    return (<FormControl
      className={`${field.className} field-input`}
      onBlur={(e) => this.props.updateState(field.name, e.target.value)}
      id="formControlsText"
      type={field.type}
      style={{height: field.type === "textarea" ? '100px' : 'auto'}} // Hack b/c of react-bootstrap
      componentClass={field.type}
      label="Text"
      placeholder={`Enter ${field.label.toLowerCase()}`}
      defaultValue={this.state[field.name]}
    />)
  }

  render() {
    return (
      <div className="form-container">
        {this.fields.map(field => {
          return (
            <div key={field.name}>
              <label className="field-label"> {field.label}</label>
              {this.renderInput(field)}
            </div>
          )
        })}
      </div>
    )
  }
}