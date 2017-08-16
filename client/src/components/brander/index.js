/**
 * Created by einavcarmon on 15/08/2017.
 */
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import './brander.css'

export class EmptyView extends Component {
  render () {
    return (
      <div className='in-phone-view'>
        <h1>{this.props.companyName}</h1>
      </div>
    )
  }
}

export class Brander extends Component {
  constructor (props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.uploadImage(this.state.file).then(this.updateColors.bind(this))
  }

  updateColors (res) {
    this.props.updateState('colors', JSON.parse(res).colors)
  }

  handleImageChange (e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render () {
    let {imagePreviewUrl} = this.state
    imagePreviewUrl = imagePreviewUrl || `${process.env.PUBLIC_URL}/img/your-logo-here.png`

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div >
            <label className='field-label'>Upload your logo to brand your app</label>
            <input type='file'
              className='file-input'
              onChange={(e) => this.handleImageChange(e)}
              accept='image/*'
              name='imgUploader' />
          </div>
          <div className='image-viewer' >
            <img className='img-preview' src={imagePreviewUrl} />
          </div>
          <Button className='btn-action'
            type='submit'
            onClick={(e) => this.handleSubmit(e)}
            disabled={!this.state.file}>
            Upload Logo
          </Button>
          <Button className='btn-action'
            onClick={() => this.props.updateState('colors', null)}>
            Reset
          </Button>
        </form>
      </div>
    )
  }

  uploadImage (imageFile) {
    return new Promise((resolve, reject) => {
      let imageFormData = new FormData()

      imageFormData.append('imageFile', imageFile)

      var xhr = new XMLHttpRequest()

      xhr.open('post', '/palette', true)

      xhr.onload = function () {
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject(this.statusText)
        }
      }

      xhr.send(imageFormData)
    })
  }
}
