/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'
import { FormControl, Button } from 'react-bootstrap'
import axios from 'axios'

import './images.css'

export default class ImagesForm extends Component {
  constructor (props ){
    super(props)

    this.fields = [
      {
        name: "apiToken",
        label: "Pixabay Api Key",
        className: "input-api-token",
        type: "input"
      },
      {
        name:"imagesQuery",
        label:"Query",
        className:"input-query",
        type: "input"
      }]

    this.state = {}
  }

  componentWillMount(){
    this.fields.forEach(field => {
      this.setState({[field.name]:this.props[field.name]})
    })

    if (this.state.apiToken){
      this.searchImages()
    }
  }

  componentWillReceiveProps(nextProps){
    this.fields.forEach(field => {
      this.setState({[field.name]:nextProps[field.name]})
    })
  }

  searchImages() {
    // key = 6162723-c19e8770101d3873c953539fa
    let query = this.state.imagesQuery ? this.state.imagesQuery.replace(" ","+") : ""
    let url = `https://pixabay.com/api/?key=${this.state.apiToken}&q=${query}&image_type=photo&pretty=true`

    axios(url).then(response => {
      const images = response.data.hits.map(hit => ({id:hit.id, url:hit.previewURL}))
      this.props.updateState("images", images)
    })
  }

  renderInput(field) {

    return (<FormControl
      className={`${field.className} field-input`}
      onBlur={(e) => this.props.updateState(field.name, e.target.value)}
      id="formControlsText"
      type={field.type}
      label="Text"
      placeholder="Enter text"
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
        <div className="button-container"><Button className="btn-action" onClick={() => this.searchImages()}>Search</Button></div>
      </div>
    )
  }
}