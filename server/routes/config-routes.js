const express = require('express');
const configRoutes = express.Router();
const Site = require('../models/sites');
const configController = {};
const generator = require('../services/helper');

/* const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password_digest, salt); */

configController.removeSite = (req, res) => {
  console.log(
    `---> Config Controller, removing site`,
    req.params.name,
  );
  Site.removeSite(req.params.name)
    .then(() =>
      res.json({ message: 'site removed' }),
    )
    .catch(err => console.log(err));
};
configController.update = (req, res) => {
  console.log(
    `---> Config Controller, editing site`,
    req.params.name,
  );
  Site.changeSite(req.body)
    .then(site => {
      res.json({
        data: site,
        message: 'site changed',
      });
    })
    .catch(err => console.log(err));
};
configController.generateUpload = (req, res) => {
  console.log(
    `---> configController, initiliating generator`,
  );
  res.uploadDetails = generator();
  console.log(res.uploadDetails);
  message: 'site served';
};

configRoutes.put(
  '/:name',
  configController.update,
);
configRoutes.delete(
  '/:name',
  configController.removeSite,
);
configRoutes.get(
  '/request',
  configController.generateUpload,
);

module.exports = configRoutes;
