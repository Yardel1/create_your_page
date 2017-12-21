require('dotenv').config();
const sha1 = require('sha1');
const superagent = require('superagent');
const API_KEY = process.env.API_KEY;

function Upload(params, uploadRequest) {
  this.params = params;
  this.uploadRequest = uploadRequest;
}

const generator = (req, res, next) => {
  const uploadPreset = UPLOAD_PRESET;
  const api_key = CLOUDINARY_KEY;
  const cloudName = CLOUD_NAME;
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const timestamp = Date.now() / 1000;
  const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}${CLOUDINARY_KEY2}`;
  const signature = sha1(paramsStr);
  res.uploadDetails = new Upload(
    {
      api_key: api_key,
      timestamp: timestamp,
      upload_preset: uploadPreset,
      signature: signature,
    },
    superagent.post(url),
  );
  console.log(res.uploadDetails);
  next();
};
module.exports = generator;
