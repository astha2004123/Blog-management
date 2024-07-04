var comment = require('../model/comment-model');
var storage = require('node-persist');
storage.init();

/*COMMENT INSERT */
exports.insert = async (req,res) =>{
    req.body.blog_id = req.params.id;
    var user_id = await storage.getItem('user_id');
    req.body.user_id = user_id;
    var data = await comment.create(req.body);
    res.status(200).json({
        status:"comment add!"
    })
}