/**
 * Created by einavcarmon on 14/08/2017.
 */
import React, { Component } from 'react'

import './images.css'

export default class ImagesView extends Component {
  render () {
    return (
      <div className='in-phone-view'>
        <h1>{this.props.companyName}</h1>
        <div className='images-container'>
          {this.props.images && this.props.images.map(img => <div key={img.url}><img src={img.url} alt={img.id} /></div>)}
        </div>
      </div>
    )
  }
}
