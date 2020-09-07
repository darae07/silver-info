const request = require('request');
const { User } = require('../../models');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });
const crypto = require('crypto');

module.exports = {
    post: (req, res) => {
        res.set('Authorization', req.session.query.code);
        res.redirect('https://kapi.kakao.com/v1/user/logout');
    }
};