import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import sha1 from 'sha1';
import superagent from 'superagent';
import axios from 'axios';

import Steps from '../components/setup/steps';
import * as actionTypes from '../store/actions';

String.prototype.capitalize = function() {
  return this.replace(/(?:^|\s)\S/g, char =>
    char.toUpperCase(),
  );
}; //taken from stackOverflow

class Setup extends Component {

  imageToState = (files, name) => {
    //learned and borrowed some code from here: https://codepen.io/hartzis/pen/VvNGZP?editors=1010
    const image = files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      const url = reader.result;
      const pictureDetails = {
        name,
        image,
        url,
      };
      this.props.UpdateUserPic(pictureDetails);
      /* this.setState({
        picture: pictureObject,
      }); */
    };
    reader.readAsDataURL(image);
  };
  profilePicture = file => {
    this.imageToState(file, actionTypes.PROFILE);
  };
  set1 = file => {
    this.imageToState(file, actionTypes.PICTURE1);
  };
  set2 = file => {
    this.imageToState(file, actionTypes.PICTURE2);
  };
  set3 = file => {
    this.imageToState(file, actionTypes.PICTURE3);
  };
  getThumbnails = links => {
    if (!links.length) return this.setupDone();
    axios
      .get(
        `http://free.pagepeeker.com/v2/thumbs.php?size=x&url=${
          links[0].url
        }`,
      )
      .then(res => {
        console.log(res);
        let userInfo = this.props.userInfo;
        let index =
          this.props.links.length - links.length;
        userInfo.links[index].thumbnail = res;
        this.setState({
          userInfo: userInfo,
        });
        links.shift();
        return this.getThumbnails(links);
      });
  };
  sendLinks = links => {
    console.log(links);
    let userInfo = this.state.userInfo;
    userInfo.links = links;
    this.getThumbnails(links);
  };
  sendPictures = (images, names) => {
    console.log(`sending ${images[0]}`);
    if (!images[0]) return this.setupDone();
    else {
      if (!images[0].Image) {
        images.shift();
        names.shift();
        return this.sendPictures(images, names);
      }
    }
    const key = names[0];

    //generates request
    axios
      .get(`http://localhost:3002/config/request`)
      .then(res => {
        const {
          uploadRequest,
          params,
        } = res.uploadDetails;
        uploadRequest.attach('file', images[0]);
        Object.keys(params).forEach(key =>
          uploadRequest.field(key, params[key]),
        );
        uploadRequest.end((err, res) => {
          if (err) return console.log(err);
          let userInfo = this.props.userInfo;
          const url = res.body.url;
          const image = 'sent';
          const pictureDetails = {
            key,
            image,
            url,
          };
          this.props.UpdateUserPic(
            pictureDetails,
          );
          images.shift();
          names.shift();
          this.sendPictures(images, names);
        });
      });

    //consider placing in backend
  };
  setupDone = () => {
    console.log(this.props.userInfo);
    axios({
      method: 'POST',
      url: 'http://localhost:3002/create/1',
      data: this.props.userInfo,
    })
      .then(res =>
        this.setState({
          fireRedirect: true,
        }),
      )
      .catch(res => this.setState({ step: 0 }));
  };
  LastStep = () => {
    console.log('initializing last Step ');
    //send & save the pictures' url
    const {
      picture,
      step,
      NextStep,
    } = this.props;
    const pictureList = [
      picture.profile_image,
      picture.pic1_image,
      picture.pic2_image,
      picture.pic3_image,
    ];
    const names = [
      'profile_url',
      'pic1_url',
      'pic2_url',
      'pic3_url',
    ];
    //this.cleanUp(pictureList,names) removes any empty objects and their corresponding names
    console.log('initializing sendPictures');
    this.sendPictures(pictureList, names);
    NextStep();
  };
  InputStep = event => {
    const {
      NextStep,
      BackStep,
      UpdateUserInfo,
      userInfo,
      step,
      picture,
    } = this.props;
    event.preventDefault();
    let {
      name: property,
      value: userInput,
    } = event.target;
    if (
      step === 1 &&
      !userInput.match(/^[a-zA-Z" "]*$/)
    )
      return;
    else {
      switch (step) {
        case 1:
          userInput = userInput.capitalize();
          break;
        case 2: //choose picture
          if (!picture) return;
          property = 'profile_pic';
          userInput = 'ready';
          NextStep();
          break;
        case 5:
          NextStep();
          break;
      }

      // send new userObject to redux state
      UpdateUserInfo(property, userInput);
      /*             
            userObject[property] = userInput;
            this.setState({
                userInfo: userObject,
            }); */
    }
  };

  QuestionStep = () => {
    const {
      ProvideName,
      PickPicture,
      Description,
      ProvideSM,
      PickType,
      TypeInfo: { Pics, Links },
      PickPW,
      Prepare,
      Error,
    } = Steps;
    const {
      NextStep,
      BackStep,
      userInfo,
      step,
      picture,
    } = this.props;
    let {
      name,
      occupation,
      description,
      facebook,
      instagram,
      linkedin,
      twitter,
    } = userInfo;
    switch (step) {
      case 0:
        return <Error />;
      case 1:
        return (
          <ProvideName
            done={NextStep}
            InputStep={this.InputStep}
            name={name}
            occupation={occupation}
          />
        );
      case 2:
        return (
          <PickPicture
            InputStep={this.InputStep}
            BackStep={BackStep}
            name={name}
            profilePicture={this.profilePicture}
            picture={
              picture ? picture.profile_url : ''
            }
          />
        );
      case 3:
        return (
          <Description
            InputStep={this.InputStep}
            BackStep={BackStep}
            description={
              userInfo.description || ''
            }
            done={NextStep}
          />
        );
      case 4:
        let sm = {};
        sm.facebook = facebook || '';
        sm.instagram = instagram || '';
        sm.linkedin = linkedin || '';
        sm.twitter = twitter || '';
        return (
          <ProvideSM
            InputStep={this.InputStep}
            sm={sm}
            done={NextStep}
            BackStep={BackStep}
          />
        );
      case 5:
        return (
          <PickType
            InputStep={this.InputStep}
            BackStep={BackStep}
          />
        );
      case 6:
        const picGallery = {};
        picGallery.set1 = this.set1;
        picGallery.set2 = this.set2;
        picGallery.set3 = this.set3;
        picGallery.pic1 = picture.pic1_url;
        picGallery.pic2 = picture.pic2_url;
        picGallery.pic3 = picture.pic3_url;
        if (userInfo.profile_type === 'pictures')
          return (
            <Pics
              InputStep={this.InputStep}
              BackStep={BackStep}
              picGallery={picGallery}
              done={NextStep}
            />
          ); //will add a conditional here
        return (
          <Links
            sendLinks={this.sendLinks}
            BackStep={BackStep}
          />
        );
      case 7:
        return (
          <PickPW
            InputStep={this.InputStep}
            BackStep={BackStep}
            done={this.LastStep}
          />
        );
      case 8:
        return <Prepare />;
    }
  };
  render = () => {
    const {
      userInfo,
      step,
      fireRedirect,
    } = this.props;
    let count;
    if (step < 8)
      count = `You're at step ${step}/7`;
    else count = '';
    return (
      <div className="setup">
        {count}
        {this.QuestionStep()}
        {fireRedirect ? (
          <Redirect
            push
            to={`/site/${userInfo.name}`}
          />
        ) : (
          ''
        )}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    userInfo: state.UserInfo.userInfo,
    step: state.Steps.step,
    picture: state.Pictures.picture,
    fireRedirect: state.Steps.fireRedirect,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    NextStep: () =>
      dispatch({
        type: actionTypes.NEXT_STEP,
      }),
    BackStep: () =>
      dispatch({
        type: actionTypes.PREV_STEP,
      }),
    UpdateUserInfo: (property, input) =>
      dispatch({
        type: actionTypes.UPDATE_USER,
        property,
        input,
      }),
    UpdateUserPic: picture =>
      dispatch({
        type: picture.name,
        picture,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setup);
/* 
Todo

-retreive existing website name list to ensure name isn't taken


concept:
all information will be stored in the state,
each question is a seperate component displayed, one at a time
the component will update the state via a function passed down to it.

Bonus:
add a progress bar
maybe ask: what is your favorite thing about yourself?

*/
