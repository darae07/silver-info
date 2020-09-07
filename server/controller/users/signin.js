const request = require('request');
const { User } = require('../../models');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });
const crypto = require('crypto');
const client_id = process.env.CLIENT_ID;
const login_redirect_uri = process.env.LOGIN_REDIRECT_URI;

module.exports = {
  get: (req, res) => {
    let address = 'https://kauth.kakao.com/oauth/authorize?response_type=code'

    let redirect_uri = `${address}&client_id=${client_id}&redirect_uri=${login_redirect_uri}`;
    res.redirect(redirect_uri);
  }
};