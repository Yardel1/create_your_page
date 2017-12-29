const bcrypt = require('bcryptjs');
const Site = require('../models/sites.js');
const Pictures = require('../models/pictures.js');
const createController = {};
const AWS = require('aws-sdk');

/* createController.findPic = (req,res) => {
    console.log('this is working')
    
} */

createController.createSite = (req, res) => {
  console.log(`---> Create Controller`, req.body);
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(
    req.body.password,
    salt
  );
  res.locals.type = 'pictures';
  console.log();
  Site.createSite({
    name: req.body.name,
    profile_type: "pictures",
    profile_pic: req.body.profile_pic,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    linkedIn: req.body.linkedin,
    twitter: req.body.twitter,
    email: req.body.email,
    color1: 'Default',
    color2: 'Default',
    occupation: req.body.occupation,
    description: req.body.description,
    password: hash,
    picture1: req.body.picture1,
    picture2: req.body.picture2,
    picture3: req.body.picture3
  })
    .then(site =>
      res.json({ message: 'new site served' })
    )
    .catch(err => console.log(err));
};
module.exports = createController;

/* 
Roles:
-creates a new website in the DB
-sends back site information for the view

TODO:
add PW
add picture input

*/
