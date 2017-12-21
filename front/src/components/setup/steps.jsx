import React from 'react';
import pictureTaking from './pick_picture/pickPicture';
import Links from './links/links';
import { Link } from 'react-router-dom';

import ProvideName from './provide_name/provide_name.js';
import Description from './description/description.js';
import ProvideSM from './provide_sm/provide_sm.js';
import PickType from './pick_type/pick_type.js';
import PickPW from './pw/pw.js';
import Prepare from './prepare/prepare.js';

const Step = {};
const { PickPicture, Pics } = pictureTaking;

Step.PickPicture = PickPicture;
Step.ProvideName = ProvideName;
Step.Description = Description;
Step.ProvideSM = ProvideSM;
Step.PickType = PickType;
Step.PickPW = PickPW;
Step.Prepare = Prepare;
Step.Error = Error;
Step.TypeInfo = {};
Step.TypeInfo.Pics = Pics;
Step.TypeInfo.Links = Links;

export default Step;

/* 
TODO:

add a progress bar


*/
