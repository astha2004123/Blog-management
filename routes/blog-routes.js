var express = require('express');
var router = express.Router();
var blog = require('../controller/blog-controller');
var multer  = require('multer');
const { route } = require('./user-routes');

/* MULTER */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
  var upload = multer({ storage: storage });

/* GET home page. */

router.post('/add_blog',blog.blog_add);
router.get('/view_blog',blog.blog_view);
router.post('/update_blog/:id',upload.single('img'),blog.blog_update);
router.get('/delete_blog/:id',blog.blog_delete);
router.get('/like/:id',blog.blog_like)
router.get('/status_blog/:status',blog.status_view)

module.exports = router;
