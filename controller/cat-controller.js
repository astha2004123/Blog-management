var catmodel = require('../model/cat-model');
var storage = require('node-persist');
storage.init( );

/* CAT_ADD */
exports.cat_add = async(req,res) =>{
    var user_id = await storage.getItem("user_id");
    req.body.user_id = user_id
    req.body.cat_img = req.file.originalname;
    var data = await catmodel.create(req.body);
    res.status(200).json({
        status:"catagory insert!",
        data
    });

}