/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

export default class ImagesView extends Component {

  constructor (props ){
    super(props)
  }

  render() {
    return ( <div>View about us: {this.props.imagesQuery}</div>
    )
  }
}
