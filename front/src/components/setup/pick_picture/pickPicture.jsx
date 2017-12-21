import React from 'react';

import Dropzone from 'react-dropzone';

const pictureTaking = {}

pictureTaking.PickPicture = ({InputStep, name, profilePicture, picture, BackStep}) => (
  <div>
    <h3>Hello, {name}! <br /> Next, please choose a profile picture</h3>
    <div className="dropzone">
    <Dropzone onDrop={profilePicture} multiple={false}>
      {picture?<img src={picture} className="profileImage Preview" />:<div className="previewText">Preview</div>}
    </Dropzone>
    </div>
      <div className="box">
        <button id='back' onClick={BackStep}>Back</button>
        <button id='sendImage' name='picture' onClick={InputStep}>OK</button>
      </div> 
  </div>
)

pictureTaking.Pics = ({InputStep,BackStep,picGallery:{set1,set2,set3,pic1,pic2,pic3},done}) => (
  <div>
    <h3>Please provide a few more pictures to display</h3>
    <div className="dropzone_group">
      <div className="single">
      <Dropzone onDrop={set1} activeClassName='active-dropzone' multiple={false}>
        {pic1?<img src={pic1} className="Image1 Preview" />:<div className="previewText">Preview</div>}
      </Dropzone>
      </div>
      <div className="single">
      <Dropzone onDrop={set2} activeClassName='active-dropzone' multiple={false}>
        {pic2?<img src={pic2} className="Image2 Preview" />:<div className="previewText">Preview</div>}
      </Dropzone>
      </div>
      <div className="single">
      <Dropzone onDrop={set3} activeClassName='active-dropzone' multiple={false}>
        {pic3?<img src={pic3} className="Image3 Preview" />:<div className="previewText">Preview</div>}
      </Dropzone>
      </div>
      <div className="box">
        <button id='sendImage' name='profile_pic' onClick={done}>OK</button>
        <button className='back_button' onClick={BackStep}>Back</button>
      </div>
    </div>
    
  </div>
)

export default pictureTaking;

/* 
Todo:
*Make h3 disappear after time interval

this.state.picture:
picture1.url
profile - the url that pickPicture will display
recent - temp url storage
recentimage - temp file storage

userInfo.picture:

profilePicture - the information stored in the db

*/
