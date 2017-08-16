/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

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

    let fieldProps = {
      className: `${field.className} field-input`,
      onBlur: (e) => this.props.updateState(field.name, e.target.value),
      defaultValue: this.state[field.name]
    }
    return (
      React.createElement(field.type, fieldProps)
    )
  }

  render() {
    return (
      <div className="form-container">
        {this.fields.map(field => {
          return (
            <div key={field.name}>
              <div className="field-label"> {field.label}</div>
              {this.renderInput(field)}
            </div>
          )
        })}
      </div>
    )
  }
}