import React, { Component } from 'react';

class screen3links extends Component {
  constructor(props) {
      super(props);
      this.state = {
          something: null
      }
  }

  render() {
    const {link1,link2,link3} = this.props
    return (
      <section className="screen3 links">
        hello
      </section>
   )
   }
}
export default screen3links;