import React, { Component } from `react`;
import axios from `axios`;

import Dropzone from `react-dropzone`;
import sha1 from `sha1`;
import superagent from `superagent`;

const SERVER = `http://localhost:3002/`;

const sendData = {
  description: `I love coding`,
  facebook: `facebook`,
  instagram: `instagram`,
  twitter: `twitter`,
  linkedin: `linkedin`,
  name: `Yarden`,
  occupation: `Full Stack`,
  profile_pic:
    `http://res.cloudinary.com/dz2nxhscn/image/upload/v1508118710/imbuevziug3evkc5d9dd.jpg`,
  profile_type: `pictures`,
  email: `yyyarden@gmail.com`,
  password: `123456`,
  picture1:
    `http://res.cloudinary.com/dz2nxhscn/image/upload/v1508118711/gcz0fxndtcejj1uyvnd2.jpg`
};

const updateData = {
  name: `kevin`,
  profile_type: 1,
  facebook: `kevin_blackwell`,
  instagram: `kevin_blackwell`,
  email: `kevin@kvein.com`,
  color1: `purple`,
  color2: `black`,
  occupation: `blacksmith`,
  description: `I love to code`
};

class Test extends Component {
  constructor() {
    super();
    this.state = { data: null, images: null };
    this.send = this.send.bind(this);
    this.receive = this.receive.bind(this);
    this.edit = this.edit.bind(this);
    this.destroy = this.destroy.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }
  
  send() {
    axios({
      method: `POST`,
      url: `${SERVER}create/1`,
      data: sendData
    }).then(res => console.log(res));
  }
  receive() {
    axios
      .get(`${SERVER}site/kevin`) //will be set to ${name}
      .then(res =>
        this.setState({ data: res.data.site[0] })
      )
      .then(console.log(this.state.data));
  }
  edit() {
    axios({
      method: `PUT`,
      url: `${SERVER}config/kevin`,
      data: updateData
    }).then(res => console.log(res));
  }
  destroy() {
    axios
      .delete(
        `${SERVER}config/kevin`
      ) //will be set to ${name}
      .then(res => this.setState({ data: res }))
      .then(console.log(this.state.data));
  }
  render() {
    let list = ``;
    if (this.state.images) {
      list = this.state.images.map((image, i) => {
        <li key={i}>
          <img src={image.secure_url} />
        </li>;
      });
    }
    return (
      <div className="welcome">
        <h1>testing CRUDs</h1>
        <button onClick={this.send}>send</button>
        <button onClick={this.receive}>
          receive
        </button>
        <button onClick={this.edit}>edit></button>
        <button onClick={this.destroy}>
          delete
        </button>
        <br />
        <br />
        <br />
        <Dropzone onDrop={this.uploadFile} />
        <ol>{list}</ol>
      </div>
    );
  }
}

export default Test;
