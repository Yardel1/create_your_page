require('dotenv').config();
const sha1 = require('sha1');
const superagent = require('superagent');
const API_KEY = process.env.API_KEY;
const UPLOAD_PRESET = process.env.UPLOAD_PRESET;
const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
const CLOUDINARY_KEY2 = process.env.CLOUDINARY_KEY2;
const CLOUD_NAME = process.env.CLOUD_NAME;

function Upload(params, url) {
  this.params = params;
  this.url = url;
}

const generator = (req, res, next) => {
  const uploadPreset = UPLOAD_PRESET;
  const api_key = CLOUDINARY_KEY;
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  const timestamp = Date.now() / 1000;
  const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}${CLOUDINARY_KEY2}`;
  const signature = sha1(paramsStr);
  return uploadDetails = new Upload(
    {
      api_key: api_key,
      timestamp: timestamp,
      upload_preset: uploadPreset,
      signature: signature,
    },
    url
  );
};
module.exports = generator;
