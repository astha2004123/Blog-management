var express = require('express');
var router = express.Router();
var comment = require('../controller/comment-controller');

/*COMMENT INSERT */
router.post('/comment/:id',comment.insert)

module.exports = router;
