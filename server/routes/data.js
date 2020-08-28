const express = require('express');
const router = express.Router();

const { dataController } = require('../controller');

router.get('/applist', dataController.getAppList.get);

module.exports = router;
