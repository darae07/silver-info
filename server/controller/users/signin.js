const request = require('request');
const { User } = require('../../models');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });
const access_token = process.env.FACEBOOK_ACCESS_TOKEN;
const crypto = require('crypto');

module.exports = {
  post: (req, res) => {

  }
};