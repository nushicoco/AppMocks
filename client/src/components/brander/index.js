/**
 * Created by einavcarmon on 15/08/2017.
 */
import React, { Component } from 'react'

import './brander.css'

export default class Brander extends Component {

  readFile(e){
    console.log(e.target);
  }

  render() {
    return ( <div>
        <button className="brander-button">COCO</button>
        <ImageUpload updateState={this.props.updateState}/>
      </div>
    )
  }
}

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.uploadImage(this.state.file).then(this._updateColors.bind(this))
  }

  _updateColors (res) {
    this.props.updateState("colors", JSON.parse(res).colors)
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={(e) => this._handleImageChange(e)} accept="image/*" name="imgUploader"/>
          <button type="submit" onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
        </form>
        {$imagePreview}
      </div>
    )
  }

  uploadImage(imageFile) {
    return new Promise((resolve, reject) => {
      let imageFormData = new FormData();

      imageFormData.append('imageFile', imageFile);

      var xhr = new XMLHttpRequest();

      xhr.open('post', '/palette', true);

      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          reject(this.statusText);
        }
      };

      xhr.send(imageFormData);

    });
  }
}
