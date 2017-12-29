import React, { Component } from 'react';

class Links extends Component {
  state = {
    links_num: 0,
    links: null
  };
  sendLinks = links => {
    console.log(links);
    let userInfo = this.state.userInfo;
    userInfo.links = links;
    this.getThumbnails(links);
  };
  getThumbnails = links => {
    if (!links.length) return this.setupDone();
    axios
      .get(
        `https://api.thumbnail.ws/api/abd32cebe7aeaabec0fab1d9e7f1a9/thumbnail/get?url=${
          links[0].url
        }`
      )
      .then(res => {
        console.log(res);
        let userInfo = this.props.userInfo;
        let index =
          this.props.links.length - links.length;
        userInfo.links[index].thumbnail = res;
        this.setState({
          userInfo: userInfo
        });
        links.shift();
        return this.getThumbnails(links);
      });
  };
  submitLink = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const description =
      event.target.description.value;
    const url = event.target.url.value;
    let linksList = [];
    this.state.links &&
      (linksList = this.state.links); //just being fancy. This is akin to a if statement, on the left, do right.
    let link = {};
    link.title = title;
    link.description = description;
    link.url = url;
    linksList.push(link);
    this.setState({ links: linksList });
  };
  /*   renderList() {
    if (!this.state.links)
      return
    return this.state.links.map( (link,i) => 
    <li key={link.title + i}>{link.title}
      <img src={link.url} className="profileImage Preview" />
    </li> )
  } */
  render() {
    const {
      done,
      BackStep,
      sendLinks
    } = this.props;
    const { links_num, links } = this.state;
    return (
      <div>
        {/* <ul className="links_list">{this.renderList()}</ul> */}
        <div className="set">
          <div className="question-container">
            <h3>
              Please provide links to your work.{' '}
            </h3>
          </div>
          <form onSubmit={this.submitLink}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
            />
            <input
              type="url"
              name="url"
              placeholder="web address"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Describe this website"
              required
            />
            <input type="submit" value="OK" />
          </form>
        </div>
        <button
          className="done_button"
          onClick={links ? sendLinks(links) : ''}
        >
          Done
        </button>
        <button
          className="back_button"
          onClick={BackStep}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Links;

/* 

http://free.pagepeeker.com/v2/thumbs.php?size=x&url=http://google.com

*/
