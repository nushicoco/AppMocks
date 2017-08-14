/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

export default class ImagesForm extends Component {
  constructor (props ){
    super(props)
    this.state ={
      companyName:props.companyName
    }
  }

  render() {
    return ( <div><input onBlur={(e) => this.props.updateState("imageQuery", e.target.value)} /><button>imageQuery</button></div>
    )
  }
}