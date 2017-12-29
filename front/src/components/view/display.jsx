import React, { Component } from 'react';
import axios from 'axios';
import SiteView from './SiteView';
String.prototype.capitalize = function() {
  return this.replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
}; //taken from stackOverflow

class LoadSite extends Component {
  state = { pageData: null };
  componentDidMount() {
    const siteName = this.props.match.params.name.capitalize();
    axios
      .get(
        `/site/${siteName}`
      )
      .then(res =>
        this.setState({
          pageData: res.data.site[0]
        })
      );
  }
  render() {
    return (
      <div>
        {this.state.pageData ? (
          <SiteView
            pageData={this.state.pageData}
          />
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default LoadSite;
