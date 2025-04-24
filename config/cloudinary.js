const cloudinary = require('cloudinary').v2;
const config = require('./db');

cloudinary.config({
  cloud_name: config.ddy4cmmcd,
  api_key: config.688519793156467,
  api_secret: config.89DCG6r11MkHpeXpkotQJt_A7Cg
});

module.exports = cloudinary;