import React, { Component } from 'react';

class screen3pics extends Component {
  constructor(props) {
      super(props);
      this.state = {
          something: null
      }
      this.renderPics = this.renderPics.bind(this)
  }
  renderPics(pictures) {
    return pictures.map( picture => <img className="pictures_gallery" src={picture} key={picture} /> )
  }
  render() {
    const {pictures} = this.props
    console.log(pictures)
    return (
      <section className="screen3 pics">
        {this.renderPics(pictures)}
      </section>
   )
   }
}
export default screen3pics;