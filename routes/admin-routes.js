var express = require('express');
var router = express.Router();
var admin = require('../controller/admin-controller');

/* ADMIN LOGIN */
router.post('/', admin.admin_login);
router.get('/user_blog',admin.blog_view)
router.get('/view_blog',admin.view)
router.post('/update_blog/:id',admin.blog_update)
router.get('/delete_blog/:id',admin.blog_delete)

module.exports = router;
