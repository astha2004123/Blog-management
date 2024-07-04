var express = require('express');
var router = express.Router();
var cat_controller = require('../controller/cat-controller');
const multer = require('multer');

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

/* CATAGORY */
router.post('/add_catagory',upload.single('cat_img'),cat_controller.cat_add);


module.exports = router;
 