const express = require('express');
const router = express.Router();

const { userController } = require('../controller');


// * GET /user/signin
router.get('/signin', userController.signin.get);

// * POST /user/signout
router.post('/signout', userController.signout.post);

// * POST /user/signup
router.get('/signup', userController.signup.get);


module.exports = router;
