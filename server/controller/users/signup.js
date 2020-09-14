const request = require('request');
const { User } = require('../../models');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });
const crypto = require('crypto');

module.exports = {
    get: async (req, res) => {
        let queryString = req.query.code;
        console.log(queryString);
        // let userId = await User.findOrCreate({
        //     where: {
        //         userId
        //     }
        // });
        // let secret = 'si!1lve@r!';
        // jwt.sign({
        //     id: userId,
        // }, secret
        // )
        res.end(queryString);
    }
};