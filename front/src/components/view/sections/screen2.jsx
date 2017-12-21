import React, { Component } from 'react';

class screen3 extends Component {
  constructor(props) {
      super(props);
      this.state = {
          something: null
      }
  }

  render() {
    const {image,description} = this.props
    return (
      <section className="screen2">
        <div className="some_picture"> 
          <img className="profile_pic" src={image} />
        </div>
        <div className="descriptionDiv">
          <p className="description">{description}</p>
        </div>
      </section>
   )
  }
}
export default screen3;