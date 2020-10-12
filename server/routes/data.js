const express = require('express');
const router = express.Router();

const { dataController } = require('../controller');

router.get('/applist', dataController.getAppList.get);
router.get('/search_result', dataController.getSearchResults.get);
router.post('/upload_article', dataController.postArticle.post);

module.exports = router;
