
/* 
This page will display a warning: proceed to delete yourself from the internet
if the user verifies, the app proceeds to delete his information from the DB

*/

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Destroy extends Component {
  constructor() {
    super();
    this.state = {
      website: '',
      password_digest: '',
      fireRedirect: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteSite = this.deleteSite.bind(this)
  }

  handleInputChange(event) {
    const {name,value} = event.target 
    this.setState({[name]: value});
  }
  deleteSite(event) {
    event.preventDefault()
    const {website,password_digest} = this.state
    axios({
        method:'DELETE',
        url: `http://localhost:3002/config/${website}`,
        data: {password_digest} 
    })
    .then( () => this.setState({fireRedirect: true}))
    .catch( err => console.log(err) );
}
  render() {
    return(
      <div className="remove_website form">
        <div className="delete_form">
          <form onSubmit={this.deleteSite}>
            <input
              type="text"
              placeholder="Your Website's name"
              name="website"
              value={this.state.website}
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password_digest"
              minLength="6" required 
              value={this.state.password_digest}
              onChange={this.handleInputChange}
            />
            <input className="submit"
              type="submit"
              value="delete"
            />
          </form>
          {this.state.fireRedirect?<Redirect push to={`/welcome`}/>:''}
        </div>
      </div>
    )
  }
}


export default Destroy;