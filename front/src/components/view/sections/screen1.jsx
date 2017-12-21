import React, { Component } from 'react';

class screen1 extends Component {
  constructor(props) {
      super(props);
      this.state = {
          something: null
      }
  }

  render() {
    const {name,occupation,email,sm} = this.props;
    const {facebook,instagram,twitter,linkedIn} = sm;
    return (
      <section className="screen1">
        <div className="viewcenter">
          <h1 className="name">{name}</h1>
          <div className="centerLine">
            <a className="email link" href={`mailto:${email}`} title={`Email ${name}`} >Contact</a>
            <p className="occupation">{occupation}</p>
          </div>
        </div>
        <footer>
          <div className="social_media_links">
            <a href={`https://twitter.com/${twitter}`}><div className="twitter" /></a>
            <a href={`https://www.facebook.com/${facebook}`}><div className="facebook" /></a>
            <a href={`https://www.instagram.com/${instagram}`}><div className="instagram" /></a>
            <a href={`https://www.linkedin.com/${linkedIn}`}><div className="linkedin" /></a>
          </div>
        </footer>
      </section>
   )
  }
}
export default screen1;