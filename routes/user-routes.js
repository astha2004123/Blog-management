var express = require('express');
var router = express.Router();
var user = require('../controller/user-controller');

/*USER */
router.post('/register',user.user_register);
router.post('/',user.user_login);
router.post('/update_user/:id',user.update);
router.get('/delete_user/:id',user.delete);

module.exports = router;
 